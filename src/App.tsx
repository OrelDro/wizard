import React, {useState} from 'react';
import './App.css';
import {IWizard} from "./common/wizard.interface";
import Section from "./components/section/section";
import Input from "./components/input/input";
import Select from "./components/select/select";

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

enum QuestionType {
  String = "string",
  Number = "number",
  Multi = "multi"
}
function App() {

  const [selectedSectionIdx, setSelectedSectionIdx] = useState<number>(-1);
  const [selectedStepIdx, setSelectedStepIdx] = useState<number>(-1);

  const updateSelected = (sectionIndex: number, stepIndex: number) => {
    setSelectedSectionIdx(sectionIndex);
    setSelectedStepIdx(stepIndex);
  };

  const clickNextButton = () => {
    if (selectedSectionIdx === -1 && selectedStepIdx === -1) {
      updateSelected(0, 0);
    } else if (selectedStepIdx < wizard.sections[selectedSectionIdx].steps.length - 1) {
      updateSelected(selectedSectionIdx, selectedStepIdx + 1);
    } else if (selectedSectionIdx < wizard.sections.length - 1 && wizard.sections[selectedSectionIdx + 1].steps.length) {
      updateSelected(selectedSectionIdx + 1, 0);
    }
  }

  return (
      <div className="App">
        <span className="app-title">Wizard App</span>
        <div className="main">
          <div className="wizard">
            {wizard.sections.map( (section, index,sections) => (
                <Section key={index} section={section} index={index} sectionsLength={sections.length} updateSelected={updateSelected}/>
            ))}
          </div>
          {selectedSectionIdx >= 0 && selectedStepIdx >= 0 &&
          <div>
            {(wizard.sections[selectedSectionIdx].steps[selectedStepIdx]?.type === QuestionType.String ||
                wizard.sections[selectedSectionIdx].steps[selectedStepIdx]?.type === QuestionType.Number) &&
              <Input name={wizard.sections[selectedSectionIdx].steps[selectedStepIdx]?.name}
                     question={wizard.sections[selectedSectionIdx].steps[selectedStepIdx]?.question}
                     type={wizard.sections[selectedSectionIdx].steps[selectedStepIdx]?.type}/>
            }
            {wizard.sections[selectedSectionIdx].steps[selectedStepIdx]?.type === QuestionType.Multi &&
            <Select name={wizard.sections[selectedSectionIdx].steps[selectedStepIdx]?.name}
                    question={wizard.sections[selectedSectionIdx].steps[selectedStepIdx]?.question}
                    values={wizard.sections[selectedSectionIdx].steps[selectedStepIdx]?.values}/>
            }
          </div>
          }
          {wizard.sections.length && <div>
            <input type="button" value="next" onClick={() => clickNextButton()}/>
          </div>}
        </div>
      </div>
  );
}

export default App;
