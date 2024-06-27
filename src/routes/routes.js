import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from "../containers/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />

      </Routes>
    </Router>
  );
}
