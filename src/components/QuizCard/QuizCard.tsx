import React, { useState } from 'react';
import './QuizCard.module.css';

interface QuizCardProps {
  frontContent: JSX.Element;
  backContent: JSX.Element;
}

function QuizCard(props: QuizCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className={`quiz-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="card-front">
        {props.frontContent}
      </div>
      <div className="card-back">
        {props.backContent}
      </div>
    </div>
  );
}

export default QuizCard;
