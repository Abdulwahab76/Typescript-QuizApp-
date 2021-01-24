import React, { useState } from "react";
import QuizScreen from "./Quizzes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Modal from "./Component/Modal";

interface AppContextInterface {
    newData: string;
    question: number;
    userName: string;
    setNewData: React.Dispatch<React.SetStateAction<string>>;
    setQuestions: React.Dispatch<React.SetStateAction<number>>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
}
export const ContextItem = React.createContext<AppContextInterface | null>(
    null
);
function Routed() {
    const [userName, setUserName] = useState("");
    const [newData, setNewData] = useState("");
    const [question, setQuestions] = useState(5);

    return (
        <>
            <Router>
                <ContextItem.Provider
                    value={{
                        newData,
                        question,
                        userName,
                        setNewData,
                        setQuestions,
                        setUserName,
                    }}
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
