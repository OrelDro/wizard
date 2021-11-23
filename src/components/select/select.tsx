import React from "react";
import "./select.css";

interface ISelectProps {
    name: string;
    question: string;
    values: string[] | undefined;
}

function Select({name, question, values}: ISelectProps) {

    return (
        <div className="select-wrapper">
            <label htmlFor={name}>{question}</label>
            <select id={name}>
                <option value=""/>
                {values?.length && values?.map( (val) => (<option key={val} value={val}>{val}</option>))}
            </select>
        </div>
    );
}

export default Select;
