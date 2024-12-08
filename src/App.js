import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./pages/NavBar";
import Footer from './pages/Footer';


const App = () => {
  return (
    <Router>
      <NavBar />
      {/* <main className="pt-[72px]">  */}
      <AppRoutes />
      {/* </main> */}
      <Footer/>
    </Router>
  );
};

export default App;
