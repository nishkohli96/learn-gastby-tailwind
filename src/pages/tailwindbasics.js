import React from "react";
import Buttons from "@TwAtoms/Buttons";
import ResponsiveComp from "@TwMolecules/ResponsiveComp";
import InputForm from "@TwMolecules/InputForm";

const TailwindBasics = () => {
    return (
        <div className="p-5">
            <Buttons />
            <ResponsiveComp />
            <InputForm/>
        </div>
    );
};

export default TailwindBasics;
