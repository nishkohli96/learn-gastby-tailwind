import React from "react";
import { Link } from "gatsby";

import About from "../components/react-comps/user-desc";
import Layout from "../components/react-comps/layout";
import SEO from "../components/react-comps/seo";

const SecondPage = () => (
    <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
        <About />
    </Layout>
);

export default SecondPage;
