import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Game from "./components/Game";
import Results from "./components/Results";

import "./App.css";

const App: React.FC<Record<string, never>> = () => {
	const [score, setScore] = useState(5);
	return (
		<Router>
			<main>
				<Header score={score} />
				<Switch>
					<Route exact path="/">
						<Game setScore={setScore} />
					</Route>
					<Route path="/results">
						<Results />
					</Route>
				</Switch>
				<Footer />
			</main>
		</Router>
	);
}

export default App;
