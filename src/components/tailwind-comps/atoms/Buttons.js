import React from "react";

/* Can't combine multiple styles in one hover, so need to write 2 hover stmts in className */
const Buttons = () => {
    return (
        <div>
            <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 hover:text-pink-500">
                Click me {/* active:bg-red-700 */}
            </button>
        </div>
    );
};

export default Buttons;
