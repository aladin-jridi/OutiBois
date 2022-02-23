import "./App.css";
import "./Admin.css";
import AdminLogin from "./AdminLogin";
import AdminDADH from "./AdminDASH";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin" element={<AdminLogin />}></Route>
        <Route path="/AdminDADH" element={<AdminDADH />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
