// hooks/usePostMutations.js
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { usePostContext } from '@/context/userContext ';
import { useMutation } from '@tanstack/react-query';



const createPost = async (newPost) => {
    try {
        const response = await axios.post('https://service.pace-unv.cloud/api/post', newPost);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error; 
    }
};

const updatePost = async ({ id, updatedPost }) => {
    const { data } = await axios.put(`https://service.pace-unv.cloud/api/post/update/${id}`, updatedPost);
    return data;
};

const deletePost = async (id) => {
    const { data } = await axios.delete(`https://service.pace-unv.cloud/api/post/delete/${id}`);
    return data;
};

export const usePostMutations = () => {
    const queryClient = useQueryClient();
    const { setPosts } = usePostContext();

    const createMutation = useMutation({
        mutationFn: createPost,
        onSuccess: (data) => {
            queryClient.invalidateQueries(['posts']);
            setPosts(prevPosts => [...prevPosts, data]);
        },
    });


    const updateMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: (data) => {
            queryClient.invalidateQueries(['posts']);
            setPosts(prevPosts => prevPosts.map(post => post.id === data.id ? data : post));
        },
    });

    const deleteMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries(['posts']);
            setPosts(prevPosts => prevPosts.filter(post => post.id !== variables.postId));
        },
    });


    return { createMutation, updateMutation, deleteMutation };
};