import { useState } from 'react';
import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode,setmode] = useState('light');
  const toggleMode = ()=>{
    if (mode==="dark"){
      setmode("light");
      document.body.style.backgroundColor="white";
    }else{
      setmode("dark");
      document.body.style.backgroundColor="#343a40";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter the heading to analyze: " mode={mode} />
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
