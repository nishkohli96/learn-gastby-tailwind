import React from "react";
import Buttons from "../components/tailwind-comps/atoms/Buttons";
import ResponsiveComp from "../components/tailwind-comps/molecules/ResponsiveComp";

const TailwindBasics = () => {
    return (
        <div className="p-5">
            <Buttons />
            <ResponsiveComp />
        </div>
    );
};

export default TailwindBasics;
