import { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, text) => {
    setAlert({
      msg: msg,
      text: text
    })
  }
  const enableMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#285f74";
      showAlert("Dark Mode Enable", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enable", "success")
    }
  }

  return (
    <BrowserRouter>
    <><Navbar title="TextUtils" about="About TextUtils" mode={mode} alert={alert} enableMode={enableMode} /><Alert alert={alert} /></>
    <Routes>
      {/*  */}
      <Route path="/" element={<><Textform mode={mode} /></>} />
      <Route path="/about" element={<><About mode={mode} /></>} />
    </Routes>
  </BrowserRouter>
  );

}
export default App;