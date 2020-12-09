/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Toggle from "react-toggle";
import { ThemeContext } from "@Utils/ThemeContext";
import Header from "./header";
import "@Styles/layout.css";

const Layout = ({ children }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div
            className={`${theme === "light" ? "theme-light" : "theme-dark"} 
        bg-primary text-main-text text-center transition-all duration-300 m-0 px-0 min-h-screen`}
        >
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <Toggle
                    id="theme-toggle"
                    checked={theme === "light" ? true : false}
                    onChange={handleThemeToggle}
                />
                <label htmlFor="theme-toggle" className="text-accent">
                    Theme toggler
                </label>
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `2rem`,
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
