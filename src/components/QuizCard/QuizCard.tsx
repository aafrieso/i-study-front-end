import React from 'react'
import { Link } from 'react-router-dom';
import { QuizFormData } from '../../types/forms';

// types
import { Quiz } from "../../types/models"

interface QuizProps {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  quizzes: Quiz[];
  // fetchAllQuizzes: () => void
  handleDeleteQuiz: (id: number) => void
  // handleUpdateQuiz: (quizData: QuizFormData) => void;
}

const QuizCard = (props: QuizProps): JSX.Element => {
  const { quizzes } = props

  return (
    <article>
      <div>
        {quizzes.map((quiz: Quiz) =>
          <div key={quiz.id}>
            <h2>{quiz.question}</h2>
            <p>{quiz.option1}</p>
            <p>{quiz.option2}</p>
            <p>{quiz.option3}</p>
            <p>{quiz.option4}</p>
            <p>{quiz.answer}</p>
            <button onClick={() => props.handleDeleteQuiz(quiz.id)}>Delete Quiz</button>
            <Link to={`/quizzes/${quiz.id}`}>
            <button onClick={() => props}>Update Quiz</button>
            </Link>
          </div>
        )}
      </div>
    </article>
  )
}

export default QuizCard
