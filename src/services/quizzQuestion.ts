import { Quiz, QuestionType } from "./../type/quiz_type";
const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
export const getQuizzDetails = async (
  questions: any,
  level: any
): Promise<QuestionType[]> => {
  let req = await fetch(
    `https://opentdb.com/api.php?amount=${questions}&difficulty=${level}&type=multiple`
  );
  let { results } = await req.json();
  let quiz: QuestionType[] = results.map((questionObj: Quiz, ind: number) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      correct_answer: questionObj.correct_answer,
      option: shuffleArray(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });
  return quiz;
};
