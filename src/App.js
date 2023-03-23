import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Detail from "./Detail";
import { createContext, useState } from "react";
import Register from "./Register";

export const UserContent = createContext();
function App() {
  const [user, setUser] = useState({});
	return (
		

		<UserContent.Provider value={{ setUser, user }}>
			<Router>
				<div className="App">
					<Routes>
							
					<Route path="/" element={<Home />} />
					<Route path="/Login" element={<Login />} />	
					<Route path="/Register" element={<Register />} />	
					<Route path="/Detail" element={<Detail />} />	
					</Routes>
				</div>
			</Router>
		</UserContent.Provider>
	);
}

export default App;
