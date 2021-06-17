import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Game from "./components/Game";
import Results from "./components/Results";

import "./App.css";

const App: React.FC<Record<string, never>> = () => {
	const [score, setScore] = useState<number>(5);
	const [userChoice, setUserChoice] = useState<string | undefined>();
	return (
		<Router>
			<main>
				<Header score={score} />
				<Switch>
					<Route exact path="/">
						<Game setUserChoice={setUserChoice} />
					</Route>
					<Route path="/results">
						<Results setScore={setScore} choice={userChoice} />
					</Route>
				</Switch>
				<Footer />
			</main>
		</Router>
	);
}

export default App;
