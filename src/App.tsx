import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Button from "./components/Button/Button";
import UserInput from "./Features/UserInput/UserInput";
import DisplayAvailableLoans from "./Features/DisplayLoans/DisplayLoans";

function App() {
	return (
		<>
			<header>
				<h2> Loan Amortization</h2>
			</header>
			<Header text="Loan Amortization" />
			<UserInput />
			<DisplayAvailableLoans />
		</>
	);
}

export default App;
