//import Layout from "@/components/Layout ";
import dynamic from "next/dynamic";
import HomePage from "./homePage";

const LayoutComponent = dynamic (() => import("/Components/Layout"));
export default function Home({children, metaTitle, metaDescription}) {
  return (
    <div>
    <LayoutComponent metaTitle="Home"
    metaDescription="this is a home">
      <HomePage />
  
   </LayoutComponent>
   </div>
  );
}
