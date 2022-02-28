import "./App.css";
import "./Admin.css";
import AdminLogin from "./AdminLogin";
import AdminDADH from "./AdminDASH";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/admin' element={<AdminLogin />}></Route>
				<Route path='/Admindash' element={<AdminDADH />}></Route>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
