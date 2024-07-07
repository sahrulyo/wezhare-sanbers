//SWR

// hooks/usePosts.js
import useSWR from 'swr';
import axios from 'axios';
import { usePostContext, useAuthContext } from '@/context/userContext ';

const fetcher = url => axios.get(url).then(res => res.data);


export const usePosts = () => {
    const { posts, setPosts } = usePostContext();
    const { data, error } = useSWR('https://service.pace-unv.cloud/api/posts?type=all', fetcher, {
        onSuccess: (data) => {
            setPosts(data);
        }
    });

    return {
        posts: data || posts,
        isLoading: !error && !data,
        isError: error
    };
};

