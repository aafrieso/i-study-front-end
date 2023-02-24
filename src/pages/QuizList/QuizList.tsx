import React from 'react';
import QuizCard from '../../components/QuizCard/QuizCard'

interface Quiz {
  question: string;
  answer: string;
  difficulty: number;
}

enum Difficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}

interface Props {
  quiz: Quiz;
}

const QuizList: React.FC<{ quizzes: Quiz[] }> = ({ quizzes }) => {
  return (
    <main className="list">
      <h1>QUIZ LIST</h1>

      {!quizzes.length && <h2> You Have No quizzes here!</h2>}

      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.question}>
            <QuizCard quiz={quiz} />
          </li>
        ))}
      </ul>

    </main>
  );
};

export default QuizList;
