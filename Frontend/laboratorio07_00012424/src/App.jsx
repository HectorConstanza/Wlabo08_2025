
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Protected from "./components/Protected";

const App = () => (
  <Router>
    <Routes>
      <Route path="./components/login.jsx" element={<Login />} />
      <Route path="./components/Protected.jsx" element={<Protected />} />
    </Routes>
  </Router>
);

export default App;