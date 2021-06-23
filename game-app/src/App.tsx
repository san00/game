import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Game from "./components/Game";
import Results from "./components/Results";

import "./App.css";

const App: React.FC<Record<string, never>> = () => {
	const [score, setScore] = useState<number>(0);
	const [userChoice, setUserChoice] = useState<string | undefined>();
	const [compChoice, setCompChoice] = useState<string | number | undefined>();
	const [userMessage, setUserMessage] = useState<string>("");

	return (
		<Router>
			<main>
				<Header score={score} />
				<Switch>
					<Route exact path="/">
						<Game setUserChoice={setUserChoice} setCompChoice={setCompChoice} />
					</Route>
					<Route path="/results">
						<Results score={score} setScore={setScore} choice={userChoice} computerChoice={compChoice} userMessage={userMessage} setUserMessage={setUserMessage} />
					</Route>
				</Switch>
				<Footer />
			</main>
		</Router>
	);
}

export default App;
