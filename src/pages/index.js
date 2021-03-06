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
            <Link to="/page-2" className="text-red-400 visited:text-purple-600">
                Go to page 2
            </Link>
            <br />
            <Link
                to="/using-typescript"
                className="text-blue-400 visited:text-pink-600"
            >
                Go to "Using TypeScript"
            </Link>
            <br />
            <Link
                to="/tailwindbasics"
                className="text-green-400 visited:text-cyan-600"
            >
                Tailwind Demo
            </Link>
            <br />
            <Link to="/darkmode">
                <span style={{ color: "#D74654" }}>DarkMode Page</span>
            </Link>
            <br />
            <Link to="/container">Container</Link> <br />
            <Link to="/flex">More Examples of Layouts</Link> <br />
            <Link to="/fontstyles" className="line-through text-blue-600">
                Font styles and borders
            </Link>
            <br />
            <Link to="/miscstyles" className=" text-blue-600">
                Misc
            </Link>
            <br />
        </div>
    </Layout>
);

export default IndexPage;
