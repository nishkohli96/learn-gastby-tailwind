import React, { useContext } from "react";
import * as Logo from "@Images/gatsby-icon.png";
import { ThemeContext } from "@Utils/ThemeContext";

/* https://tailwindcss.com/docs/responsive-design */

const ResponsiveComp = () => {
    const { theme } = useContext(ThemeContext);

    /*  For theming, you need to import the theme context and then use theme at the top
        of the Frament tag to enable theme on the child elements */

    return (
        <div
            className={`${
                theme === "light" ? "theme-light" : "theme-dark"
            } my-5 `}
        >
            {/* Width of 16 by default, 20 on medium screens, and 25 on large screens */}
            <img
                className="w-16 md:w-20 lg:w-25"
                alt="Placeholder"
                src={Logo}
            />

            <div className="mt-5 max-w-md mx-auto bg-blue-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    {/*md:flex means display: flex */}
                    <div className="md:flex-shrink-0">
                        {/* to prevent shrinking on medium screens and larger. */}
                        <img
                            className="h-48 w-full object-cover md:w-48"
                            src={Logo}
                            alt="Man looking at item at a store"
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            Case study
                        </div>
                        <a
                            href="/"
                            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                        >
                            Finding customers for your new business
                        </a>
                        <p className="mt-2 text-gray-500">
                            Getting a new business off the ground is a lot of
                            hard work. Here are five ideas you can use to find
                            your first customers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Use unprefixed utilities to target mobile, and override them at larger breakpoints */}
            <div className="text-center sm:text-left md:text-right">
                This text positions itself as per screen size
            </div>

            <div className="bg-green-500 md:bg-red-500 lg:bg-teal-500">
                This text changes its color as per screen size
            </div>

            <div className="text-green-500 text-16px md:text-22px">
                Custom responsive font-size
            </div>

            <p className="text-accent">
                Themed Accent color defined in global.css
            </p>
        </div>
    );
};

export default ResponsiveComp;
