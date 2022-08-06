import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotfoundPage from './pages/404/NotfoundPage';
import AboutPage from './pages/about-faqs/aboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';


function AppRoutingOne() {
  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to='/'>| Home |</Link>
            <Link to='/about'>| About |</Link>
            <Link to='/about'>| Faqs |</Link>

            <Link to='/una404'>| Not Exists |</Link>
          </aside>
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/tasks' element={<TasksPage />} />
              <Route path='/task/:taskId' element={<TaskDetailPage />} />
              <Route path='*' element={<NotfoundPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default AppRoutingOne;
