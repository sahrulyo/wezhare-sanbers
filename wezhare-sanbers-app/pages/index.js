import Layout from "@/components/Layout ";

export default function Home({children, metaTitle, metaDescription}) {
  return (
    <div>
    <Layout metaTitle="Home"
    metaDescription="this is a home">
    <p>Home</p>
   </Layout>
   </div>
  );
}
