/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import ThemeContextProvider from './src/utils/ThemeContext';
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => {
    return <ThemeContextProvider>{element}</ThemeContextProvider>;
};