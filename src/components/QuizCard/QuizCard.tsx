import React from 'react';

interface Quiz {
  question: string;
  answer: string;
  difficulty: number;
}

interface Props {
  quiz: Quiz;
}

const QuizCard: React.FC<Props> = ({ quiz }) => {
  const { question, difficulty } = quiz;

  return (
    <li className="card">
      <h2>{question}</h2>
      <p>
        <strong>Difficulty:</strong> {difficulty === 1 ? 'Easy' : difficulty === 2 ? 'Medium' : 'Hard'}
      </p>
    </li>
  );
};

export default QuizCard;
