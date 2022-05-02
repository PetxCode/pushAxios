import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import HomePage from "./component/Home/HomePage";
import Register from "./component/Register/Register";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
