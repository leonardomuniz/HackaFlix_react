import React from "react";
import { Router } from "react-router-dom";
import "./styles/universal.css";

import Routes from "./routes";
import history from "./services/history";

import { AuthProvider } from './services/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>


  );
}

export default App;
