import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import Profiles from './pages/Profiles/Profiles';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import NewQuiz from './pages/NewQuiz/NewQuiz';
import EditQuizCard from './pages/EditQuiz/EditQuiz';

import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import * as authService from './services/authService';
import * as quizService from './services/quizService';

import { User, Quiz } from './types/models';
import { QuizFormData } from './types/forms';

function App(): JSX.Element {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(authService.getUser());
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  const fetchQuizzes = async () => {
    const quizData = await quizService.index();
    setQuizzes(quizData);
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handleLogout = (): void => {
    authService.logout();
    setUser(null);
    navigate('/');
  };

  const handleAuthEvt = (): void => {
    setUser(authService.getUser());
  };

  const handleAddQuiz = async (quizData: QuizFormData): Promise<void> => {
    const newQuiz = await quizService.create(quizData);
    setQuizzes([newQuiz, ...quizzes]);
    navigate('/quizzes');
  };

  const handleDeleteQuiz = async (id: number): Promise<void> => {
    try {
      await quizService.deleteQuiz(id);
      setQuizzes((prevQuizzes) => prevQuizzes.filter((quiz) => quiz.id !== id));
    } catch (error) {
    }
  };

  const handleUpdateQuiz = async (quizData: QuizFormData): Promise<void> => {
    await quizService.update(quizData);

    const updatedQuiz = await quizService.index();
    setQuizzes(updatedQuiz);
    navigate('/quizzes');
  };

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/signup" element={<Signup handleAuthEvt={handleAuthEvt} />} />
        <Route
          path="/quizzes"
          element={<NewQuiz quizzes={quizzes} handleAddQuiz={handleAddQuiz} handleDeleteQuiz={handleDeleteQuiz}  user={user}/>}
        />
        <Route path="/login" element={<Login handleAuthEvt={handleAuthEvt} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quizzes/:id"
          element={
            <ProtectedRoute user={user}>
              <EditQuizCard handleUpdateQuiz={handleUpdateQuiz} user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
