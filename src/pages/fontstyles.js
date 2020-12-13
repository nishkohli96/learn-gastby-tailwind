import React from "react";

const FontStyles = () => {
    return (
        <div className="p-2 container">
            <p className="font-sans text-red-700 md:text-2xl text-lg font-bold underline italic">
                The quick brown fox jumps over the lazy dog.
            </p>
            <p className="diagonal-fractions">1/2 3/4 5/6</p>
            <p
                className="no-underline hover:underline"
                style={{ color: "#a981ff" }}
            >
                Link
            </p>
            <p className="capitalize">The quick brown fox ...</p>
            <p className="capitalize md:uppercase">
                The quick brown fox jumped over the lazy dog.
            </p>
            <input
                className="placeholder-red-600 focus:underline placeholder-opacity-75"
                placeholder="jane@example.com"
            />
            <div className="bg-clip-border p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed">
                some text
            </div>
            <br />
            <div className="bg-clip-padding p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed"></div>{" "}
            <br />
            <div className="bg-clip-content p-6 bg-indigo-600 border-4 border-indigo-300 border-dashed"></div>{" "}
            <br />
            <div className="text-5xl font-extrabold ...">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    Hello world
                </span>
            </div>
            <div className="bg-gradient-to-tr from-orange-400 via-red-500 to-pink-500 p-2">
                {" "}
                some text
            </div>
            <div className="rounded-lg bg-blue-400"> rounded </div>
            <div className="rounded-full py-3 px-6 bg-pink-600">Pill Shape</div>
            <div className="rounded-full h-24 w-24 flex items-center justify-center  bg-pink-600">
                Circle
            </div>
            {/* Rounding sides */}
            <div className="rounded-r-lg bg-blue-400">.rounded-r-lg</div> <br />
            {/* Rounding Corners */}
            <div className="rounded-bl-lg bg-blue-400">
                {" "}
                diff corners rounded
            </div>
        </div>
    );
};

export default FontStyles;
