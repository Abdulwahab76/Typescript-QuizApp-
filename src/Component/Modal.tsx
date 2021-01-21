import React, { useState, useRef, useContext, createContext } from "react";
import "./../App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroups from "./Button";
import useLocalStorage from "./../Hooks/uselocal";
import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
interface AppContextInterface {
  newData: string;
  setNewData: React.Dispatch<React.SetStateAction<string>>;
  setQuestions: React.Dispatch<React.SetStateAction<string>>;
}
export const ContextItem = React.createContext<AppContextInterface | null>(
  null
);

function Modal() {
  const { ref, playState, getAnimation } = useWebAnimations({
    ...heartBeat,
    timing: {
      duration: 2000,
      // iterations: Infinity,
    },
  });
  const [addItem, setAddItem] = useLocalStorage("QuizDetails", []);
  const [newData, setNewData] = useState("");
  const [question, setQuestions] = useState("");
  const [input, setInput] = useState();

  const Click = () => {
    setAddItem({
      UserName: input,
      level: newData,
      questions: question,
    });
  };

  const inputVal = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <ContextItem.Provider value={{ newData, setNewData, setQuestions }}>
      <div id="myModal" className="modal">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="modal-content"
        >
          <h2>Play Quiz </h2>
          <TextField
            className="input"
            id="standard-basic"
            label="Enter your name"
            onChange={inputVal}
          />

          <ButtonGroups
            name="Choose your level:"
            btn1="Easy"
            btn2="Medium"
            btn3="Hard"
          />
          <hr />

          <ButtonGroups
            name="Choose your no of questions?"
            btn1="5"
            btn2="10"
            btn3="15"
          />
          <div className="submit">
            <Button
              onClick={Click}
              fullWidth={true}
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </ContextItem.Provider>
  );
}
export default Modal;
