import React from "react";
import {Head} from "next/document";

function Layout({title, keywords, description, children}) {
    return (
        <Head>
            {children}
        </Head>
    );
}

export default Layout;
