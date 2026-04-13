import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import SignupForm from "./pages/SignUp";

import PrivateRoute from "./components/auth/PrivateRoute";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const onLogin = (data) => {
    setIsUserLoggedIn(true);
    console.log("Login Data:", data);
  };
  const onSignup = (data) => {
    console.log("SignUp  Data:", data);
  };
  const handlelogOut = () => {
    console.log("here");
    setIsUserLoggedIn(false);
  };

  return (
    <div>
      <Router>
        <Routes>
          {/* Redirect to dashboard if already logged in */}
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/login"
            element={
              isUserLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login onLogin={onLogin} />
              )
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              isUserLoggedIn ? (
                <PrivateRoute>
                  {" "}
                  <DashBoard handlelogOut={handlelogOut} />
                </PrivateRoute>
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
          <Route
            path="/signUp"
            element={<SignupForm onSignup={onSignup} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
