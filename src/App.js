import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForms';
import React, { useState } from 'react';

//import About from './components/About';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');


  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils-Light Mode";
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = "TextUtils-Dark Mode";
    }
  };

  return (
    <> <Navbar mode={mode} toggleMode={toggleMode} />
    <div className="container"> <TextForm mode={mode} heading="Enter the text here" /></div>
   
    </>
    
    /*<Router>
     
      
      

      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm mode={mode} heading="Enter the text here" />} />
        </Routes>
      </div>
    </Router>*/
  );
}

export default App;
