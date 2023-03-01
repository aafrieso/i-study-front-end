import { Link } from 'react-router-dom';
import styles from './QuizCard.module.css'
import { Quiz } from "../../types/models"
import { useState } from 'react';

interface QuizProps {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  quizzes: Quiz[];
  handleDeleteQuiz: (id: number) => void;
}

const QuizCard = (props: QuizProps): JSX.Element => {
  const { quizzes } = props;
  const [flippedCard, setFlippedCard] = useState<number>(-1);

  const handleCardClick = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(-1);
    } else {
      setFlippedCard(index);
      if (flippedCard >= 0) {
        setTimeout(() => setFlippedCard(-1), 1000);
      }
    }
  };

  return (
    <article className={styles.container}>
      <div>
        {quizzes.map((quiz: Quiz, index: number) => (
          <div
            className={`${
              styles.card
            } ${flippedCard === index ? styles["card-flip"] : ""}`}
            key={quiz.id}
            onClick={() => handleCardClick(index)}
          >
            <div className={styles.front}>
              <h2>Q: {quiz.question}</h2>
              <p>{quiz.option1}</p>
              <p>{quiz.option2}</p>
              <p>{quiz.option3}</p>
              <p>{quiz.option4}</p>
              <button onClick={() => props.handleDeleteQuiz(quiz.id)}>
                Delete Quiz
              </button>
              <Link to={`/quizzes/${quiz.id}`} state={{ quiz }}>
                <button onClick={() => props}>Update Quiz</button>
              </Link>
            </div>
            <div className={styles.back}>
              <h1>
                <b>A: {quiz.answer}</b>
              </h1>
              <button onClick={() => props.handleDeleteQuiz(quiz.id)}>
                Delete Quiz
              </button>
              <Link to={`/quizzes/${quiz.id}`} state={{ quiz }}>
                <button onClick={() => props}>Update Quiz</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default QuizCard;
