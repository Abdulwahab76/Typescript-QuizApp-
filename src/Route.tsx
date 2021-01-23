import React, { useState } from "react";
import QuizScreen from "./Quizzes";
import { QuestionCard } from "./Component/QuestionCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Modal from "./Component/Modal";

interface AppContextInterface {
    newData: string;
    question: string;
    setNewData: React.Dispatch<React.SetStateAction<string>>;
    setQuestions: React.Dispatch<React.SetStateAction<string>>;
}
export const ContextItem = React.createContext<AppContextInterface | null>(
    null
);
function Routed() {
    const [newData, setNewData] = useState("");
    const [question, setQuestions] = useState("");

    return (
        <>
            <Router>
                <ContextItem.Provider
                    value={{ newData, question, setNewData, setQuestions }}
                >
                    <Switch>
                        <Route exact path="/" component={Modal} />
                        <Route exact path="/quiz" component={QuizScreen} />
                    </Switch>
                </ContextItem.Provider>
            </Router>
        </>
    );
}
export default Routed;
