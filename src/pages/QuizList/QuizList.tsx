import React from 'react';

interface QuizCardProps {
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
  question: string;
  answer: string;
  difficulty: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ frontContent, backContent, question, answer, difficulty }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">
        {frontContent || (
          <div>
            <h3>{question}</h3>
            <p>Difficulty: {difficulty}</p>
          </div>
        )}
      </div>
      <div className="back">
        {backContent || (
          <div>
            <h3>Answer</h3>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
