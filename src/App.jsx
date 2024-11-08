import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import "./App.css";

import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
