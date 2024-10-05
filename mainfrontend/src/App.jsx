// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import UserProfile from "./Components/UserProfile";
import AddReminder from "./Components/AddReminder";
import AuthForm from "./Components/AuthForm"; // Added import for AuthForm
import PageFooter from "./Components/PageFooter";

import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/add-reminder" element={<AddReminder />} />
          <Route path="/login" element={<AuthForm />} />
          {/* Optionally handle 404 */}
        </Routes>
        <PageFooter />
      </div>
    </Router>
  );
};

export default App;
