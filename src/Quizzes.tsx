import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizzDetails } from "./services/quizzQuestion";
import { QuestionCard } from "./Component/QuestionCard";
import { QuestionType } from "./type/quiz_type";
import { ContextItem } from "./Route";

function QuizScreen() {
    let [quiz, setQuiz] = useState<QuestionType[]>([]);
    let [currentStep, setCurrentStep] = useState(0);
    let [score, setScore] = useState(0);
    const context = React.useContext(ContextItem);
    console.log(context?.question, "working");
    // let [value, setValue] = useState(context?.question);
    let [showResult, setShowResult] = useState(false);
    // console.log(value);

    useEffect(() => {
        async function fetchData() {
            const questions: QuestionType[] = await getQuizzDetails(
                5,
                "medium"
            );

            setQuiz(questions);
            console.log("this", quiz);
        }
        fetchData();
    }, []);
    if (!quiz.length) {
        return <h3>loading..</h3>;
    }

    const ReloadFunc = (e: React.FormEvent<EventTarget>, userAns: string) => {
        e.preventDefault();

        const currentQuestions: QuestionType = quiz[currentStep];

        console.log("w", currentQuestions.correct_answer);

        if (userAns === currentQuestions.correct_answer) {
            setScore(++score);
        }

        if (currentStep !== quiz.length - 1) setCurrentStep(++currentStep);
        else {
            setShowResult(true);
        }
    };
    if (showResult) {
        return (
            <div className="question-container result-container">
                <h2>Result</h2>

                <p className="result-text">
                    You final score is
                    <b> {score}</b> out of <b>{quiz.length}</b>
                </p>
            </div>
        );
    }
    return (
        <>
            <div className="App">
                <QuestionCard
                    options={quiz[currentStep].option}
                    question={quiz[currentStep].question}
                    callback={ReloadFunc}
                />
            </div>
        </>
    );
}
export default QuizScreen;