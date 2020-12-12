import React from "react";
import * as Logo from "@Images/gatsby-icon.png";

const ContainerPage = () => {
    return (
        // Without mx-auto, its margin-left wud be zero and mr > 0
        <div className="container mx-auto px-4 py-4 bg-pink-300">
            <p>Inside the container</p>
            <div className="box-content h-32 w-32 p-4 border-4 bg-purple-300">
                <p>Text inside box</p>
            </div>

            <div className="space-y-5  bg-purple-400 my-2 py-2">
                {/* Space y-5 means space between elements is 5 */}
                <span className="block bg-blue-500">1</span>
                <span className="block bg-blue-500">2</span>
                <span className="block bg-blue-500">3</span>
            </div>

            <div className="space-y-5 h-15 w-60 space-x-10  bg-purple-400 my-2 py-2">
                {/* Space y-5 means space between elements is 5 */}
                <span className="p-2 bg-blue-500">1</span>
                <span className="p-2 bg-blue-500">2</span>
                <span className="p-2 bg-blue-500">3</span>
            </div>

            <div className="flex space-x-4 bg-purple-400 my-2 py-2 ">
                <div className="flex-1 bg-pink-400">1</div>
                <div className="flex-1 bg-pink-400">2</div>
                <div className="flex-1 bg-pink-400">3</div>
            </div>

            <div className="bg-purple-400 my-2">
                <span class="inline-grid grid-cols-3 gap-x-4 bg-white">
                    <span>1</span>
                    <span>1</span>
                    <span>1</span>
                </span>
                <span class="float-right inline-grid grid-cols-3 gap-x-4 bg-yellow-300">
                    <span>2</span>
                    <span>2</span>
                    <span>2</span>
                </span>
            </div>

            <img className="float-left w-10 h-10" src={Logo} alt="test" />
            <img className="float-right w-12 h-12" src={Logo} alt="test" />
            <p className="clear-left ...">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Name
                bla bla Name bla blaName bla blaName bla blaName bla blaName bla
                blaName bla blaName bla blaName bla blaName bla blaName bla
                blaName bla blaName bla blaName bla blaName bla blaName bla
                blaName bla blaName bla blaName bla blaName bla blaName bla
                blaName bla blaName bla blaName bla blaName bla blaName bla
                blaName bla blaName bla blaName bla blaName bla blaName bla
                blaName bla blaName bla blaName bla blaName bla blaName bla
                blaName bla blaName bla blaName bla bla
            </p>
        </div>
    );
};

export default ContainerPage;
