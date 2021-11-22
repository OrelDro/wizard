import React, {useState} from 'react';
import './App.css';
import {ISection, IStep, IWizard} from "./common/wizard.interface";
import Section from "./components/section/section";

const wizard: IWizard = {
  name: "My wizard",
  sections: [
    {
      name: "Section 1", steps: [
        { name: "step 1", question: "What is your name?", type: "string" },
        { name: "step 2", question: "What is your age?", type: "number" },
        { name: "last step", question: "gender?", type: "multi", values: ["MALE", "FEMALE"] },
      ]
    },
    {
      name: "Section 2",
      steps: [
        { name: "another step", question: "What shirt size do you wear?", type: "multi", values: ["XS", "S", "M", "L", "XL", "XXL"] }
      ]
    },
    {
      name: "Section 3",
      steps: [
        { name: "another step3", question: "What shirt size do you wear 3333?", type: "multi", values: ["XS", "S", "M", "L", "XL", "XXL"] }
      ]
    }
  ]
}

export enum SelectedType {
  Section = 1,
  Step = 2
}
function App() {

  const [selectedStep, setSelectedStep] = useState<IStep | null>(null);

  const updateSelected = (selected: ISection | IStep, type: number) => {
    if (type === SelectedType.Section) {
      const selectedSection = selected as ISection;
      setSelectedStep(selectedSection.steps[0]);
    } else if (type === SelectedType.Step) {
      const selectedStep = selected as IStep;
      setSelectedStep(selectedStep);
    }
  };

  return (
    <div className="App">
      <span className="app-title">Wizard App</span>
      <div className="main">
        <div className="wizard">
          {wizard.sections.map( (section, index,sections) => (
              <Section key={index} section={section} index={index} sectionsLength={sections.length} updateSelected={updateSelected}/>
          ))}
        </div>
        <div>
          { (selectedStep?.type === "string" || selectedStep?.type === "number") && <>
            <label htmlFor={selectedStep.name}>{selectedStep?.question}</label>
            <input id={selectedStep.name} type={selectedStep?.type}/>
          </>}
          {selectedStep?.type === "multi" && <>
            <label htmlFor={selectedStep.name}>{selectedStep?.question}</label>
            <select id={selectedStep.name}>
              {selectedStep?.values?.length && selectedStep?.values.map( (val) => (<option key={val} value={val}>{val}</option>))}
            </select>
          </>}

        </div>
      </div>
    </div>
  );
}

export default App;
