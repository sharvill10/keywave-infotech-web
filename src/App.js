import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import NavBar from './pages/NavBar';



const App = () => {
  return (
    <Router>
      <NavBar/>
      <AppRoutes />
    </Router>
  );
};

export default App;
