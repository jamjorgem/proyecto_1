import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import NotfoundPage from './pages/404/NotfoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/dashboardPage';
import Asyncexample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';



function AppRoutingFinal() {
  let loggedIn = true;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            loggedIn ? (

              <Navigate replace to="/dashboard" />
            ) : (
              <Navigate replace to="/login" />
            )
          } />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/ejemplo1' element={<Asyncexample />} />
          <Route path='/ejemplo2' element={<ObservableExample />} />
          <Route path='/dashboard' element={
            loggedIn ? (

              <DashboardPage />
            ) : (
              <Navigate replace to="/login" />
            )
          } />
          <Route path='*' element={<NotfoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutingFinal;
