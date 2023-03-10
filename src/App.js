import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = ()=>{
    if (mode==="dark"){
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled",'success');
      document.title='TextUtils - Light Mode'
    }else{
      setmode("dark");
      document.body.style.backgroundColor="#343a40";
      showAlert("Dark mode has been enabled",'success');
      document.title='TextUtils - Dark Mode'
    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <TextForm heading="Enter the heading to analyze: " mode={mode} showAlert={showAlert} /> */}
      <Routes> 
        <Route path='/textutils' element={<TextForm heading="Enter the heading to analyze: " mode={mode} showAlert={showAlert} />} />
        <Route path='/' element={<TextForm heading="Enter the heading to analyze: " mode={mode} showAlert={showAlert} />} />
        <Route path='aboutus' element={<AboutUs mode={mode} />} />        
      </Routes>
    </Router>
    </>
  );
}

export default App;
