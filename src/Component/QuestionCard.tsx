import React, { useState, useEffect } from "react";
import { questionPropsType } from "./../type/quiz_type";
import "./../App.css";
import Checkbox from "@material-ui/core/Checkbox";
import { ContextItem } from "./../Route";

export const QuestionCard: React.FC<questionPropsType> = ({
    question,
    options,

    callback,
}) => {
    let [selectedAns, setSelectedAns] = useState("");
    const [corrected, setCorrected] = useState(false);
    const handleSelection = (ev: any) => {
        setSelectedAns(ev.target.value);
        setCorrected(true);
    };
    const context = React.useContext(ContextItem);

    return (
        <div className="question-container">
            <h2>Hey {context?.userName}</h2>
            <h2 className="h2">Question </h2>

            <div className="question">
                <p>{question}</p>
            </div>

            <form
                className="chooseBtns"
                onSubmit={(e: React.FormEvent<EventTarget>) => {
                    callback(e, selectedAns);
                    setCorrected(false);
                }}
            >
                {options.map((opt: string, ind: number) => {
                    return (
                        <label key={ind}>
                            <div className="inp-btn">
                                <Checkbox
                                    checked={opt === selectedAns}
                                    value={opt}
                                    onChange={handleSelection}
                                />
                                {opt}
                            </div>
                        </label>
                    );
                })}
                <input
                    className="submitbtn"
                    type="submit"
                    disabled={corrected ? false : true}
                />
            </form>
        </div>
    );
};
