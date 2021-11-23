import React from "react";
import "./section.css";
import {ISection} from "../../common/wizard.interface";
import Step from "../step/step";

interface ISectionProps {
    index: number;
    section: ISection;
    sectionsLength: number;
    updateSelected: (sectionIndex: number, stepIndex: number) => void;
}

function Section({index, section, updateSelected, sectionsLength}: ISectionProps) {

    return (
        <div className="section">
            <span className="section-oval" onClick={ (event) => updateSelected(index, 0)}>{section?.name}</span>
            {section?.steps.length && <span className="line"/>}

            {section.steps.map( (step, idx, steps) => (
                <Step key={idx} step={step} updateSelected={updateSelected} stepIndex={idx} sectionIndex={index} sectionsLength={sectionsLength} stepsLength={steps.length}/>
            ))}
        </div>
    );
}

export default Section;
