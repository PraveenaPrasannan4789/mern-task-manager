import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import UserLogin from "./components/auth/Login";
import SignupForm from "./components/auth/Signup";
import DashBoard from "./pages/Dashboard";
import PrivateRoute from "./components/auth/PrivateRoute";

import HomePage from "./pages/HomePage";

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
      <HomePage />
    </div>
  );
}

export default App;

// <Router>
//       <Routes>
//         {/* Redirect to dashboard if already logged in */}
//         <Route
//           path="/"
//           element={
//             isUserLoggedIn ? (
//               <Navigate to="/dashboard" />
//             ) : (
//               <UserLogin onLogin={onLogin} />
//             )
//           }
//         ></Route>
//         <Route
//           path="/dashboard"
//           element={
//             isUserLoggedIn ? (
//               <PrivateRoute>
//                 {" "}
//                 <DashBoard handlelogOut={handlelogOut} />
//               </PrivateRoute>
//             ) : (
//               <Navigate to="/" />
//             )
//           }
//         ></Route>
//         <Route
//           path="/signUp"
//           element={<SignupForm onSignup={onSignup} />}
//         ></Route>
//       </Routes>
//     </Router>
