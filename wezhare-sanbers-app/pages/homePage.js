// pages/index.js
import axios from 'axios';
import { PostProvider } from '@/context/userContext ';
import { usePosts } from '@/hooks/usePost ';
import { usePostMutations } from '@/hooks/useMutation ';
import { QueryClient, dehydrate, Hydrate } from '@tanstack/react-query';

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['posts'], async () => {
        const { data } = await axios.get('https://service.pace-unv.cloud/api/posts?type=all');
        return data;
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

const HomePage = ({ dehydratedState }) => {
    const { posts, isLoading, isError } = usePosts();
    const { createMutation, updateMutation } = usePostMutations();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <PostProvider>
            <Hydrate state={dehydratedState}>
                <div>
                    {posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                        </div>
                    ))}
                    <button onClick={() => createMutation.mutate({ title: 'New Post' })}>Create New Post</button>
                    <button onClick={() => updateMutation.mutate({ id: 'postId', updatedPost: { title: 'Updated Title' } })}>Update Post</button>
                </div>
            </Hydrate>
        </PostProvider>
    );
};

export default HomePage;