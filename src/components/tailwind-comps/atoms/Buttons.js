import React from "react";

/* Can't combine multiple styles in one hover, so need to write 2 hover stmts in className */
const Buttons = () => {
    return (
        <div>
            <button className="py-2 px-4 mr-5 mb-5 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 hover:text-pink-500">
                Click me {/* active:bg-red-700 */}
            </button>

            <button className="transform mr-5 mb-5 hover:scale-110 motion-reduce:transform-none bg-purple-600 text-white px-5 py-2 rounded-md">
                Hover me
            </button>

            {/* Add opacity: ['disabled'] in tailwind.config */}
            <button
                class="disabled:opacity-30 mr-5 mb-5 bg-purple-600 text-white px-5 py-2"
                disabled
            >
                Submit
            </button>

            <button className="hover:bg-green-500 sm:hover:bg-blue-500 mr-5 mb-5 bg-purple-600 text-white px-5 py-2">
                Responsive Hover color 
            </button>

            <a href="/" class="text-blue-600 visited:text-red-600 mr-5 mb-5">
                Visited Link
            </a>
        </div>
    );
};

export default Buttons;
