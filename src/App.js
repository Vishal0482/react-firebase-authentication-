import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './configs/firebaseConfig';
import { getAuth, signOut } from "firebase/auth";
import Home from './components/Home';

function App() {

  initializeApp(firebaseConfig);
  const auth = getAuth();

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/reset">Reset password</Link>
            </li>
            <li>
              <Link to="#" onClick={() => {
                signOut(auth)
                  .then(() => {
                    console.log("user signed out");
                  })
                  .catch((error) => {
                    console.log("error", error);
                  });
              }}>Log out</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
