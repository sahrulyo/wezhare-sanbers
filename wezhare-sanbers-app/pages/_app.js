//import "@/ styles/globals.css";
import '../styles/tailwind.css';
import { Flowbite } from 'flowbite-react';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { PostProvider } from '@/context/userContext ';



const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <Flowbite>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <PostProvider>
            <Component {...pageProps} />
          </PostProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </Flowbite>
  );
}
