import React from 'react'

// types
import { Quiz } from "../../types/models"

interface QuizProps {
  id: any;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  quizzes: Quiz[];
  fetchAllQuizzes: () => void
  deleteQuiz: (id: any) => void
}

const QuizCard = (props: QuizProps): JSX.Element => {
  const { quizzes, deleteQuiz } = props

  const handleDeleteQuiz = (id: any) => {
    deleteQuiz(id);
  };

  return (
    <article>
      <div>
        {quizzes.map((quiz: any) =>
          <div key={quiz.id}>
            <h2>{quiz.question}</h2>
            <p>{quiz.option1}</p>
            <p>{quiz.option2}</p>
            <p>{quiz.option3}</p>
            <p>{quiz.option4}</p>
            <p>{quiz.answer}</p>
            <button onClick={() => deleteQuiz(quiz.id)}>Delete Quiz</button>
          </div>
        )}
      </div>
    </article>
  )
}

export default QuizCard