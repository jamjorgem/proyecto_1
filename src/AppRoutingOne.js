import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotfoundPage from './pages/404/NotfoundPage';
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';



function AppRoutingOne() {

  let logged = localStorage.getItem('credentials');

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('user logged?', logged);
  }, []);

  let taskList = [
    {
      id: 1,
      name: 'task 1',
      description: 'description task 1'
    },
    {
      id: 2,
      name: 'task 2',
      description: 'description task 2'
    }
  ]

  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to='/'>| Home |</Link>
            <Link to='/about'>| About |</Link>
            <Link to='/about'>| Faqs |</Link>
            <Link to='/task/1'>| Task 1 |</Link>
            <Link to='/task/2'>| Task 2 |</Link>
            <Link to='/login'>| Login |</Link>

            <Link to='/una404'>| Not Exists |</Link>
          </aside>
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={
                logged ? (

                  <Navigate replace to="/" />
                ) : (
                  <LoginPage />
                )
              } />
              <Route path='/about' element={<AboutPage />} />
              {/* reemplaza el componente a mostrar */}
              {/* <Route path='/profile' element={logged ? <ProfilePage /> : <HomePage />} /> */}
              {/* redirige a la pagina del home */}
              <Route path='/profile' element={
                logged ? (
                  <ProfilePage />
                ) : (
                  <Navigate replace to="/login" />
                )
              } />
              <Route path='/tasks' element={<TasksPage />} />
              <Route path='/task/:taskId' element={<TaskDetailPage task={taskList[0]} />} />
              <Route path='*' element={<NotfoundPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default AppRoutingOne;
