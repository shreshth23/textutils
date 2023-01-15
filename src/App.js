import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      {/* <TextForm heading="Enter the heading to analyze: " /> */}
      <AboutUs />
    </>
  );
}

export default App;
