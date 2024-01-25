import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" exact element={<Login />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;