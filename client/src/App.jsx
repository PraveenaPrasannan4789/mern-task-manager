import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { useState } from "react";
import UserLogin from "./components/auth/Login";
import SignupForm from "./components/auth/Signup";
import DashBoard from "./pages/Dashboard";

function App() {
  const[isUserLoggedIn,setIsUserLoggedIn]= useState(false);
  const onLogin = (data) => {
    setIsUserLoggedIn(true);
    console.log("Login Data:", data);
  };
  const onSignup = (data) => {
    console.log("Login Data:", data);
  };
  const handlelogOut=()=>{
    console.log('here')
setIsUserLoggedIn(false)
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Redirect to dashboard if already logged in */}
          <Route
            path="/"
            element={
              isUserLoggedIn ? (
                <Navigate to="/dashboard" />
              ) : (
                <UserLogin onLogin={onLogin} />
              )
            }
          ></Route>
          <Route path="/dashboard" element={isUserLoggedIn? (<DashBoard handlelogOut={handlelogOut} />):(<Navigate to ="/"/>)}></Route>
          <Route
            path="/signUp"
            element={<SignupForm onSignup={onSignup} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
