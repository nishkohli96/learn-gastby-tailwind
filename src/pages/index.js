import React from "react";
import { Link } from "gatsby";

import Layout from "@ReactComps/layout";
import Image from "@ReactComps/image";
import SEO from "@ReactComps/seo";

/* Link name is same as the file name */
const IndexPage = () => (
    <Layout>
        <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
            <SEO title="Home" />
            <h1>Hi people!!!</h1>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2">Go to page 2</Link> <br />
            <Link to="/using-typescript">Go to "Using TypeScript"</Link> <br />
            <Link to="/tailwindbasics">Tailwind Demo</Link>
        </div>
    </Layout>
);

export default IndexPage;
