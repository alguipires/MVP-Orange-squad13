import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
