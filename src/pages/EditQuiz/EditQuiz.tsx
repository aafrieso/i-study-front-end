import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { QuizFormData } from '../../types/forms';
import * as quizService from '../../services/quizService';

interface EditQuizCardProps {
  handleUpdateQuiz: (updatedQuiz: QuizFormData) => void;
}

const EditQuizCard = ( props: EditQuizCardProps): JSX.Element => {
  const { id } = useParams();
  const{state}=useLocation()
  // const [form, setForm] = useState<QuizFormData>({
  //   question: '',
  //   option1: '',
  //   option2: '',
  //   option3: '',
  //   option4: '',
  //   answer: '',
  // });

  const [form, setForm] = useState<QuizFormData>( state )

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // const { name, value } = e.target;
    // setForm(prevState => ({
    //   ...prevState,
    //   [name]: value,
    // }));

    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>): Promise<void> => {
    evt.preventDefault();
    // try {
    //   await handleUpdateQuiz(parseInt(id), form);
    //   navigate('/quizzes');
    // } catch (err) {
    //   console.log(err);
    // }

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
          // value={form.question}
          onChange={handleChange}
        />

        <label>Option 1</label>
        <input
          required
          type="string"
          name="option1"
          id="option1-input"
          placeholder="Option 1"
          // value={form.option1}
          onChange={handleChange}
        />

        <label>Option 2</label>
        <input
          required
          type="string"
          name="option2"
          id="option2-input"
          placeholder="Option 2"
          // value={form.option2}
          onChange={handleChange}
        />

        <label>Option 3</label>
        <input
          required
          type="string"
          name="option3"
          id="option3-input"
          placeholder="Option 3"
          // value={form.option3}
          onChange={handleChange}
        />

        <label>Option 4</label>
        <input
          required
          type="string"
          name="option4"
          id="option4-input"
          placeholder="Option 4"
          // value={form.option4}
          onChange={handleChange}
        />

        <label>Answer</label>
        <input
          required
          type="string"
          name="answer"
          id="answer-input"
          placeholder="Answer"
          // value={form.answer}
          onChange={handleChange}
        />

        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default EditQuizCard;
