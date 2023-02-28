import { useState } from "react";

import styles from "./EditQuiz.module.css";

interface Quiz {
  id: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

interface Props {
  quiz: Quiz;
  handleUpdateQuiz: (id: any, updatedQuiz: Quiz) => void;
}

const EditQuizCard: React.FC<Props> = ({ quiz, handleUpdateQuiz }) => {
  const [form, setForm] = useState<Quiz>(quiz);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleUpdateQuiz(parseInt(form.id), form);
    setForm({
      id: quiz.id,
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    });
  };

  return (
    <main className={`${styles.container} new`}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>EDIT QUIZ</h1>

        <label htmlFor="question-input">Question</label>
        <input
          required
          type="text"
          name="question"
          id="question-input"
          placeholder="Question"
          value={form.question}
          onChange={handleChange}
        />

        <label htmlFor="option1-input">Option 1</label>
        <input
          required
          type="text"
          name="option1"
          id="option1-input"
          placeholder="Option 1"
          value={form.option1}
          onChange={handleChange}
        />

        <label htmlFor="option2-input">Option 2</label>
        <input
          required
          type="text"
          name="option2"
          id="option2-input"
          placeholder="Option 2"
          value={form.option2}
          onChange={handleChange}
        />

        <label htmlFor="option3-input">Option 3</label>
        <input
          required
          type="text"
          name="option3"
          id="option3-input"
          placeholder="Option 3"
          value={form.option3}
          onChange={handleChange}
        />

        <label htmlFor="option4-input">Option 4</label>
        <input
          required
          type="text"
          name="option4"
          id="option4-input"
          placeholder="Option 4"
          value={form.option4}
          onChange={handleChange}
        />

        <label htmlFor="answer-input">Answer</label>
        <input
          required
          type="text"
          name="answer"
          id="answer-input"
          placeholder="Answer"
          value={form.answer}
          onChange={handleChange}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default EditQuizCard;
