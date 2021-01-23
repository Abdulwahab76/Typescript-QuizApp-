import React, { useState } from "react";
import { questionPropsType } from "./../type/quiz_type";
import "./../App.css";
import Checkbox from "@material-ui/core/Checkbox";
import { ContextItem } from "./../Route";

export const QuestionCard: React.FC<questionPropsType> = ({
  question,
  options,

  callback,
}) => {
  // interface AppContextInterface {
  //     ref: React.MutableRefObject;
  // }
  let [selectedAns, setSelectedAns] = useState("");
  // const myRef = React.useRef<HTMLInputElement>(null);
  const [corrected, setCorrected] = useState(false);
  // console.log(myRef);
  const handleSelection = (ev: any) => {
    setSelectedAns(ev.target.value);
    setCorrected(true);
  };
  const context = React.useContext(ContextItem);
  return (
    <div className="question-container">
      <h2>Hey {context?.userName}</h2>
      <h2>Question </h2>
      <div className="question">
        <p>{question}</p>
      </div>

      <form
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
