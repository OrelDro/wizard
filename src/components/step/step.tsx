import React from "react";
import "./step.css";
import {ISection, IStep} from "../../common/wizard.interface";
import {SelectedType} from "../../App";

interface IStepProps {
    stepIndex: number;
    sectionIndex: number;
    step: IStep;
    stepsLength: number;
    sectionsLength: number;
    updateSelected: (selected: ISection | IStep, type: number) => void;
}

function Step({stepIndex, sectionIndex, step, updateSelected, sectionsLength, stepsLength}: IStepProps) {

    return (
        <div className="step">
            <span className="step-oval" onClick={ (event) => updateSelected(step, SelectedType.Step)}>{step?.name}</span>
            {(stepsLength - 1 !== stepIndex || sectionsLength - 1 !== sectionIndex) && <span className="line"/>}
        </div>
    );
}

export default Step;
