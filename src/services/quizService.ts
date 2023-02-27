import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/quizzes`;
import { Quiz } from '../types/models'
import { QuizFormData } from '../types/forms';

async function index(): Promise<any> {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

async function create(QuizFormData: any): Promise<any> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(QuizFormData),
  });
  return await response.json();
}

async function updateQuiz(quiz: Quiz): Promise<any> {
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
  create,
  updateQuiz,
  deleteQuiz
  };