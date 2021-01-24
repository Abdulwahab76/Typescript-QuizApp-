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
    const [text, setText] = useState("");
    let [showResult, setShowResult] = useState(false);
    console.log(context?.userName, "name");

    setTimeout(() => {
        setText("Please refresh your browser!");
    }, 3000);
    useEffect(() => {
        async function fetchData() {
            let x = context?.question;
            let y = context?.newData;
            console.log(y, "its y");
            const questions: QuestionType[] = await getQuizzDetails(x, y);
            setQuiz(questions);
        }
        fetchData();
    }, [context?.question, context?.newData]);
    if (!quiz.length) {
        return (
            <div className="loading">
                <h3>Loading...</h3> <br />
                <br />
                <h3>{text}</h3>
            </div>
        );
    }

    const ReloadFunc = (e: React.FormEvent<EventTarget>, userAns: string) => {
        e.preventDefault();

        const currentQuestions: QuestionType = quiz[currentStep];

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

                <p className="result-text ">
                    Your final score is
                    <b> {score}</b> out of <b>{quiz.length} </b> <br />
                    <b>
                        Your Quizz answers is
                        {score === 1 || score === 2
                            ? " Very Bad 😞 Please improve it!"
                            : " Very Good 😊 "}
                    </b>
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
