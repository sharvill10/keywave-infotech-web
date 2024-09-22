// App.js
import React from 'react';
import NavBar from './sections/NavBar';
import Products from './sections/Products';
import AboutUs from './sections/AboutUs';


function App() {
  return (
    <div className="font-montserrat">
      <NavBar />
      
        <Products />
        <AboutUs/>
      
    </div>
  );
}

export default App;