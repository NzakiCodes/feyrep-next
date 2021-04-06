import { PagesHeader } from "components/header";
import Layout from "components/layout";

export default function About(){
    return(
       <Layout pageTitle="About" >
           <PagesHeader img="/images/IMG-2244.jpg"/>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus quas itaque odio laudantium nemo eligendi doloribus! Sint cum voluptatem consectetur earum at, similique accusamus animi deserunt ipsam, iusto eius.</p>
       </Layout>
    )
}