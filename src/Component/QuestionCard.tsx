import React, { useState } from "react";
import { questionPropsType } from "./../type/quiz_type";
import "./../App.css";
import Checkbox from "@material-ui/core/Checkbox";
export const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,

  callback,
}) => {
  let [selectedAns, setSelectedAns] = useState("");
  const handleSelection = (ev: any) => {
    setSelectedAns(ev.target.value);
    console.log(ev.target.value);
  };
  return (
    <div className="question-container">
      <div className="question">{question}</div>

      <form
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
      >
        {options.map((opt: string, ind: number) => {
          return (
            <div key={ind} className="inp-btn">
              <label>
                <Checkbox
                  checked={opt === selectedAns}
                  id="inp"
                  value={opt}
                  onChange={handleSelection}
                />
              </label>
              {opt}
            </div>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};
