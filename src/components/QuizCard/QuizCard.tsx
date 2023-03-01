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
  handleDeleteQuiz: (id: number) => void
}

const QuizCard = (props: QuizProps): JSX.Element => {
  const { quizzes } = props
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article className={styles.container}>
      <div>
        {quizzes.map((quiz: Quiz) =>
          <div className={`${styles.card} ${isFlipped ? styles['card-flip'] : ''}`} key={quiz.id} onClick={() => setIsFlipped(!isFlipped)}>
            <div className={styles.front}>
              <h2>Q: {quiz.question}</h2>
              <p>{quiz.option1}</p>
              <p>{quiz.option2}</p>
              <p>{quiz.option3}</p>
              <p>{quiz.option4}</p>
              <button onClick={() => props.handleDeleteQuiz(quiz.id)}>Delete Quiz</button>
              <div className="link-wrapper">
                <Link to={`/quizzes/${quiz.id}`} state={{ quiz }}>
                  <button className={styles['update-btn']}>Update Quiz</button>
                </Link>
              </div>
            </div>
            <div className={styles.back}>
              <p><b>A: {quiz.answer}</b></p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}


export default QuizCard
