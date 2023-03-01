import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QuizFormData } from '../../types/forms';

interface EditQuizCardProps {
  handleUpdateQuiz: (updatedQuiz: QuizFormData) => void;
}

const EditQuizCard = ( props: EditQuizCardProps): JSX.Element => {
  const location = useLocation()
  const {quiz} = location.state
  
  const [form, setForm] = useState<QuizFormData>( quiz )

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();

    props.handleUpdateQuiz(form)
  };
  
  return (
    <main>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h1>EDIT QUIZ</h1>

        <label>Question</label>
        <input
          required
          type="string"
          name="question"
          id="question-input"
          placeholder="Question"
          onChange={handleChange}
        />

        <label>Option 1</label>
        <input
          required
          type="string"
          name="option1"
          id="option1-input"
          placeholder="Option 1"
          onChange={handleChange}
        />

        <label>Option 2</label>
        <input
          required
          type="string"
          name="option2"
          id="option2-input"
          placeholder="Option 2"
          onChange={handleChange}
        />

        <label>Option 3</label>
        <input
          required
          type="string"
          name="option3"
          id="option3-input"
          placeholder="Option 3"
          onChange={handleChange}
        />

        <label>Option 4</label>
        <input
          required
          type="string"
          name="option4"
          id="option4-input"
          placeholder="Option 4"
          onChange={handleChange}
        />

        <label>Answer</label>
        <input
          required
          type="string"
          name="answer"
          id="answer-input"
          placeholder="Answer"
          onChange={handleChange}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default EditQuizCard;
