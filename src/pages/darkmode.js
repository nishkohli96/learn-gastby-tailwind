import React from "react";

const DarkModePage = () => {
    /* The responsive variant needs to come first, then dark, then state variant*/
    return (
        <div className="bg-white dark:bg-black p-2">
            <p className="dark:text-white text-black">I am a themed text</p>
            <p className="dark:hover:text-green-300 hover:text-blue-600 dark:text-white text-black">
                Hoverable themed text
            </p>
            <h1 className="text-green-300">Header Text h1</h1>
        </div>
    );
};

export default DarkModePage;
