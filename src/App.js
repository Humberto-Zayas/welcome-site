import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';
import HeroTitle from './HeroTitle';
import Login from './components/Login';
import UpdateHeroTitle from './components/UpdateHeroTitle';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setLoggedIn(false);
  };

  const ProtectedRoute = ({ children }) => {
    return loggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/hero-title">Hero Title</Link>
            </li>
            {!loggedIn ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
            <li>
              <Link to="/update-hero-title">Update Hero Title</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/hero-title" element={<HeroTitle />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route
            path="/update-hero-title"
            element={
              <ProtectedRoute>
                <UpdateHeroTitle />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
