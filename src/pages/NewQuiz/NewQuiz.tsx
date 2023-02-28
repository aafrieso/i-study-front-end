import './NewQuiz.css';
import React, { useState } from 'react';
import { QuizFormData } from '../../types/forms';
import * as quizService from '../../services/quizService';
import QuizCard from '../../components/QuizCard/QuizCard';
import { Quiz } from '../../types/models';

interface NewQuizProps {
  handleAddQuiz: (QuizData: QuizData) => void;
  // fetchAllQuizzes: () => void;
  quizzes: Quiz[];
  handleDeleteQuiz: (id: number) => void
  // handleUpdateQuiz: (quizData: QuizFormData) => void;
}

interface QuizData {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

const NewQuiz = (props: NewQuizProps): JSX.Element => {
  const { quizzes } = props
  const [form, setForm] = useState<QuizData>({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   const { name, value } = e.target;
  //   setForm(prevState => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({...form, [e.target.name]: e.target.value})
  };


  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();
    props.handleAddQuiz(form)
      setForm({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
      });
  };

  // function fetchAllQuizzes(): void {
  //   throw new Error ("Error")
  // }
  
  return (
    <main className="new">
      <h1>NEW QUIZ HERE</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="question-input">Question:</label>
        <input
          required
          type="text"
          name="question"
          id="question-input"
          placeholder="Your Question Here"
          value={form.question}
          onChange={handleChange}
        />
        <label htmlFor="option1-input">Option1:</label>
        <input
          required
          type="text"
          name="option1"
          id="option1-input"
          placeholder="First Option Here"
          value={form.option1}
          onChange={handleChange}
        />
        <label htmlFor="option2-input">Option2:</label>
        <input
          required
          type="text"
          name="option2"
          id="option2-input"
          placeholder="Second Option Here"
          value={form.option2}
          onChange={handleChange}
        />
        <label htmlFor="option3-input">Option3:</label>
        <input
          required
          type="text"
          name="option3"
          id="option3-input"
          placeholder="Third Option Here"
          value={form.option3}
          onChange={handleChange}
        />
        <label htmlFor="option4-input">Option4:</label>
        <input
          required
          type="text"
          name="option4"
          id="option4-input"
          placeholder="Fourth Option Here"
          value={form.option4}
          onChange={handleChange}
        />
        <label htmlFor="answer-input">Answer:</label>
        <input
          required
          type="text"
          name="answer"
          id="answer-input"
          placeholder="Answer To Question Here"
          value={form.answer}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
      <QuizCard quizzes={quizzes}
      // fetchAllQuizzes={fetchAllQuizzes}
      handleDeleteQuiz={props.handleDeleteQuiz} question={''} option1={''} option2={''} option3={''} option4={''} answer={''}      
        // handleUpdateQuiz={props.handleUpdateQuiz}
      />
    </main>
  );
};

export default NewQuiz;


