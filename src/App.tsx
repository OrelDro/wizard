import React from 'react';
import './App.css';

const wizard = {
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


function App() {

  return (
    <div className="App">

    </div>
  );
}

export default App;
