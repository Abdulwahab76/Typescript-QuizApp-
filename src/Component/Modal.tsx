import React, { useState, useRef } from "react";
import "./../App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroups from "./Button";
import useLocalStorage from "./../Hooks/uselocal";
import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
function Modal() {
  const { ref, playState, getAnimation } = useWebAnimations({
    ...heartBeat,
    timing: {
      duration: 2000,
      // iterations: Infinity,
    },
  });
  const [input, setInput] = useState("");
  const [level, setLevel] = useState("");
  const [question, setQuestions] = useState("");
  const [addItem, setAddItem] = useLocalStorage("QuizDetails", []);

  const Click = () => {
    console.log(input);
    setAddItem({
      user_name: input,
      level: level,
      questions: question,
    });
    console.log(level, question);
  };
  const inputVal = (e: any) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  // const Btn2 = (e: any) => {
  //     setLevel(e.target.name);
  //     console.log("work", e.target.name);
  // };

  // const Btn2 = (e: any) => {
  //     alert("workig2");
  //     setLevel(e.target.name);
  //     console.log(e.target.name);
  // };
  // const Btn3 = (e: any) => {
  //     alert("workig3");
  //     setLevel(e.target.name);
  // };
  const Btn5 = (e: any) => {
    alert("workig3");
    setLevel(e.target.name);
  };

  return (
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
          callback1={Btn5}
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
  );
}
export default Modal;
