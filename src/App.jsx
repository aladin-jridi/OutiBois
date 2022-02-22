import "./App.css";
import './AdminLogin'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLogin from './AdminLogin'
function App() {
	return (
		<BrowserRouter>
		<Routes>
		<Route path = '/Admin' element={<AdminLogin/>} ></Route>

		</Routes>
		</BrowserRouter>
	)
}

export default App;
