import React from "react";
import "./step.css";
import {IStep} from "../../common/wizard.interface";

interface IStepProps {
    stepIndex: number;
    sectionIndex: number;
    step: IStep;
    stepsLength: number;
    sectionsLength: number;
    updateSelected: (sectionIndex: number, stepIndex: number) => void;
}

function Step({stepIndex, sectionIndex, step, updateSelected, sectionsLength, stepsLength}: IStepProps) {

    return (
        <div className="step">
            <span className="step-oval" onClick={ (event) => updateSelected(sectionIndex, stepIndex)}>{step?.name}</span>
            {(stepsLength - 1 !== stepIndex || sectionsLength - 1 !== sectionIndex) && <span className="line"/>}
        </div>
    );
}

export default Step;
