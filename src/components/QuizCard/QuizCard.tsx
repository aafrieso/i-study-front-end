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
}

const QuizCard = (props: QuizProps): JSX.Element => {
  const { quizzes } = props

  return (
    <article>
      <div>
        {quizzes.map((quiz: any) =>
          <div>
            <h2>{quiz.question}</h2>
            <p>{quiz.option1}</p>
            <p>{quiz.option2}</p>
            <p>{quiz.option3}</p>
            <p>{quiz.option4}</p>
            <p>{quiz.answer}</p>
          </div>
        )}
      </div>
    </article>
  )
}

export default QuizCard