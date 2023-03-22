import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Detail from "./components/Detail";
import { createContext, useState } from "react";
import Register from "./components/Register";

export const UserContent = createContext();
function App() {
  const [user, setUser] = useState({});
	return (
		

		<UserContent.Provider value={{ setUser, user }}>
			<Router>
				<div className="App">
					<Routes>
							
					<Route path="/" element={<Home />} />
					<Route path="/Register" element={<Register />} />	
					</Routes>
				</div>
			</Router>
		</UserContent.Provider>
	);
}

export default App;
