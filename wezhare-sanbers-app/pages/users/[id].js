import Layout from "@/components/Layout ";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

export default function UserIdByName (){
    const router = useRouter();
    const {id} = router?.query;

    return (
            <Layout>
                <h1>UserIdByName: {id}</h1>
            </Layout>
    )

}