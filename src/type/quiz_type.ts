export type Quiz = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};
export type QuestionType = {
    question: string;
    answer: string;
    option: string[];
    correct_answer: string;
};
export type questionPropsType = {
    question: string;
    options: string[];
    callback: (e: React.FormEvent<EventTarget>, userAns: string) => void;
};
// export type QuestionPropsType = {
//     question: string;
//     options: string[];
// };