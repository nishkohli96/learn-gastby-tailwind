import React from "react";

const DarkModePage = () => {
    /* The responsive variant needs to come first, then dark, then state variant*/
    return (
        <div className="bg-white dark:bg-black p-2">
            <p className="dark:text-white text-black">I am a themed text</p>
            <p className="dark:hover:text-green-300 hover:text-blue-600 dark:text-white text-black">
                Hoverable themed text
            </p>

            <div className="bg-gradient-brand m-2 p-2">
                <h1>Header Text h1</h1>
                <p className="txBlue bgViolet">Multi-Classes Text</p>
                <p className="customText"> Hybrid Text</p>
            </div>
        </div>
    );
};

export default DarkModePage;
