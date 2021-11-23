import React from "react";
import "./input.css";

interface IInputProps {
    name: string;
    question: string;
    type: string;
}

function Input({name, type, question}: IInputProps) {

    return (
        <div>
            <label htmlFor={name}>{question}</label>
            <input id={name} type={type}/>
        </div>
    );
}

export default Input;
