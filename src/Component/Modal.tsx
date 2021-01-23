import React, { useState, useRef, useContext, createContext } from "react";
import "./../App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroups from "./Button";
import useLocalStorage from "./../Hooks/uselocal";
import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
import { Link } from "react-router-dom";
import { ContextItem } from "./../Route";

function Modal() {
    const { ref, playState, getAnimation } = useWebAnimations({
        ...heartBeat,
        timing: {
            duration: 2000,
        },
    });
    const context = React.useContext(ContextItem);
    console.log(context?.question, "data2");
    const [addItem, setAddItem] = useLocalStorage("QuizDetails", []);
    const [newData, setNewData] = useState("");
    const [question, setQuestions] = useState("");
    const [corrected, setCorrected] = useState(false);

    const [input, setInput] = useState();
    console.log(addItem);
    const Click = () => {
        setAddItem({
            UserName: input,
            level: context?.newData,
            questions: context?.question,
        });
        context?.setQuestions(question);
        context?.setNewData(newData);
    };

    const inputVal = (e: any) => {
        setInput(e.target.value);
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
                    required
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
                    <Link to="/quiz">
                        <Button
                            fullWidth={true}
                            variant="contained"
                            color="secondary"
                            onClick={Click}
                        >
                            Submit
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Modal;
