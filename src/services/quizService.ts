const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/quizzes`;
import { Quiz } from '../types/models'

async function index(): Promise<any> {
  const res = await fetch(BASE_URL);
  return res.json();
}

async function createQuiz(quiz: Quiz): Promise<Quiz> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quiz),
  });
  return await response.json();
}

async function updateQuiz(quiz: Quiz): Promise<Quiz> {
  const response = await fetch(`${BASE_URL}/${quiz.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(quiz),
  });
  return await response.json();
}

async function deleteQuiz(id: number): Promise<void> {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
}

export { 
  index,
  createQuiz,
  updateQuiz,
  deleteQuiz
  };
