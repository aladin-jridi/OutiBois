import "./App.css";
import './AdminLogin'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLogin from './AdminLogin'
import AdminDADH from "./AdminDASH";
function App() {
	return (
		<BrowserRouter>
		<Routes>
		<Route path = '/AdminLogin' element={<AdminLogin/>} ></Route>
		<Route path = '/AdminDADH' element={<AdminDADH/>} ></Route>


		</Routes>
		</BrowserRouter>
	)
}

export default App;
