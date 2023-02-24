import React from 'react';
import QuizCard from './QuizCard';

interface QuizzesProps {
  // Add any props that the Quizzes component needs
}

const Quizzes: React.FC<QuizzesProps> = (props) => {
  return (
    <div>
      <QuizCard
        frontContent={<h1>Front content goes here</h1>}
        backContent={<h1>Back content goes here</h1>}
      />
    </div>
  );
};

export default Quizzes;
