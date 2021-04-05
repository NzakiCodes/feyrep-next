import Head from "next/head";
import Header from "./header";
import Navbar from "./navbar";

export default function Layout({ children, pageTitle, navlink, home }) {
    return (
        <div>
            <Head>
                <title>{pageTitle && pageTitle + " | "}FEYReP</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/mdi/css/materialdesignicons.min.css" />
            </Head>
            <main>
                <Navbar {...navlink && navlink} />
                <div className="p-10" />
                {
                    home && <Header />
                }
                {children}
            </main>
        </div>
    )
}