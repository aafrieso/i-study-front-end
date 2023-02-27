import './NewQuiz.css';
import { useState } from 'react';
import { QuizFormData } from '../../types/forms';
import * as quizService from '../../services/quizService';

interface NewQuizProps {
  handleAddQuiz: () => void;
}

const NewQuiz: React.FC<NewQuizProps> = ({ handleAddQuiz }) => {
  const [form, setForm] = useState<QuizFormData>({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();
    try {
      await quizService.create(form);
      setForm({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
      });
      handleAddQuiz();
    } catch (error) {
      console.log(error);
    }
  };

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
    </main>
  );
};

export default NewQuiz;
