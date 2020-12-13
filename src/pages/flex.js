import React from "react";

const FlexComp = () => {
    return (
        <div className="p-4">
            <div className="p-4 flex flex-row justify-between">
                <div className="z-40 bg-red-300 border-black">5</div>
                <div className="z-30 bg-red-300">4</div>
                <div className="z-20 bg-red-300">3</div>
                <div className="z-10 bg-red-300">2</div>
                <div className="z-0 bg-red-300">1</div>
            </div>

            <div className="p-4 flex flex-col-reverse">
                <div className="z-40 bg-red-300 border-black">5</div>
                <div className="z-30 bg-red-300">4</div>
                <div className="z-20 bg-red-300">3</div>
                <div className="z-10 bg-red-300">2</div>
                <div className="z-0 bg-red-300">1</div>
            </div>

            {/* Use the grid-cols-{n} utilities to create grids with n equally sized columns. */}
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-red-300 m-1">1</div>
                <div className="bg-red-300 m-1">2</div>
                <div className="bg-red-300 m-1">3</div>
                <div className="bg-red-300 m-1">4</div>
                <div className="bg-red-300 m-1">5</div>
                <div className="bg-red-300 m-1">6</div>
                <div className="bg-red-300 m-1">7</div>
                <div className="bg-red-300 m-1">8</div>
                <div className="bg-red-300 m-1">9</div>
            </div>

            {/* All of the children div will cover an entire row below sm */}
            {/* Use the col-span-{n} utilities to make an element span n columns. */}
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6">
                <div className="bg-green-300 m-1">1</div>
                <div className="bg-green-300 m-1">2</div>
                <div className="bg-green-300 m-1 col-span-2">3</div>
                <div className="bg-green-300 m-1">4</div>
                <div className="bg-green-300 m-1 col-span-2">5</div>
                <div className="bg-green-300 m-1 col-span-2">6</div>
                <div className="bg-green-300 m-1">7</div>
                <div className="bg-green-300 m-1">8</div>
                <div className="bg-green-300 m-1">9</div>
            </div>

            <div className="grid grid-cols-6 gap-4">
                <div className="col-start-2 col-span-4 bg-blue-300">1</div>
                <div className="col-start-1 col-end-3 bg-blue-300">2</div>
                <div className="col-end-7 md:col-span-2 bg-blue-300">3</div>
                <div className="col-start-1 col-end-7 bg-blue-300">4</div>
            </div>

            <div className="h-64 grid grid-rows-4 grid-flow-col gap-4 mt-4">
                <div className="bg-yellow-300">1</div>
                <div className="bg-yellow-300">2</div>
                <div className="bg-yellow-300">3</div>
                <div className="bg-yellow-300">4</div>
                <div className="bg-yellow-300">5</div>
                <div className="bg-yellow-300">6</div>
                <div className="bg-yellow-300">7</div>
                <div className="bg-yellow-300">8</div>
                <div className="bg-yellow-300">9</div>
            </div>
        </div>
    );
};

export default FlexComp;
