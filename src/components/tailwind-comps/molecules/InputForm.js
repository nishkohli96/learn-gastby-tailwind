import React from "react";

const InputForm = () => {
    return (
        <>
            <form>
                <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                    Sign up
                </button>
                <input type="checkbox" aria-label='Option' class="checked:bg-blue-600 w-5 h-5 checked:border-transparent ml-5" />
            </form>

            <div className="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
                <p className="text-indigo-600 group-hover:text-gray-900">
                    New Project
                </p>
                <p className="text-indigo-500 group-hover:text-gray-500">
                    Create a new project from a variety of starting templates.
                </p>
            </div>
        </>
    );
};

export default InputForm;
