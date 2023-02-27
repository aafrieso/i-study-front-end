import React from 'react';
import QuizCard from '../../components/QuizCard/QuizCard';

interface QuizListProps {
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}
//const CustomQuizCard = (props: QuizListProps): JSX.Element => {



const CustomQuizCard: React.FC<QuizListProps> = ({ frontContent, backContent, question, option1, option2, option3, option4, answer }) => {
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
            <p>Question: {question}</p>
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

export default CustomQuizCard;

