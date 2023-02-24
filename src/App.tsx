// npm modules 
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// page components
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Landing from './pages/Landing/Landing';
import Profiles from './pages/Profiles/Profiles';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import QuizList from './pages/QuizList/QuizList';
import NewQuiz from './pages/NewQuiz/NewQuiz';

// components
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// services
import * as authService from './services/authService';
import * as quizService from './services/quizService';

// types
import { User, Quiz } from './types/models';

function App(): JSX.Element {
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await quizService.index();
      setQuizzes(data);
    };
    fetchQuizzes();
  }, []);

  const [user, setUser] = useState<User | null>(authService.getUser());

  const handleLogout = (): void => {
    authService.logout();
    setUser(null);
    navigate('/');
  };

  const handleAuthEvt = (): void => {
    setUser(authService.getUser());
  };

  const handleAddQuiz = async (data: any): Promise<void> => {
    const newQuiz: Quiz = await quizService.create(data);
    setQuizzes([newQuiz, ...quizzes]);
    navigate('/quizzes');
  };

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route path='/quizzes' element={
          <NewQuiz handleAddQuiz={handleAddQuiz} />
        } />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
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
      </Routes>
    </>
  );
}

export default App;