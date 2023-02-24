import './NewQuiz.css'
import { useState } from 'react';

interface NewQuizProps {
  handleAddQuiz: (quiz: Quiz) => void
}

interface Quiz {
  name: string
  topic: string
  difficulty: string
  time: string
}

const NewQuiz: React.FC<NewQuizProps> = (props) => {

  const [form, setForm] = useState<Quiz>({
    name: '',
    topic: '',
    difficulty: '',
    time: '15',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    props.handleAddQuiz(form)
    setForm({
      name: '',
      topic: '',
      difficulty: '',
      time: '15',
    })
  }

  return (
    <main className="new">
      <h1>NEW QUIZ</h1>
      <form autoComplete="off">
        <label htmlFor="name-input">Class Name:</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="topic-input">Topic:</label>
        <input
          required
          type="text"
          name="topic"
          id="topic-input"
          placeholder="Topic"
          value={form.topic}
          onChange={handleChange}
        />

        <label htmlFor="difficulty-input">Difficulty</label>
        <input
          required
          type="text"
          name="difficulty"
          id="difficulty-input"
          placeholder="Difficulty"
          value={form.difficulty}
          onChange={handleChange}
        />

        <label htmlFor="time-input">Time (in minutes)</label>
        <select
          required
          name="time"
          id="time-input"
          value={form.time}
          onChange={handleChange}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* form fields */}
          <button type="submit">SUBMIT</button>
        </form>
        
      </form>
    </main>
  )
}

export default NewQuiz