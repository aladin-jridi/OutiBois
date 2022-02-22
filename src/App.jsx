import "./App.css";
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
