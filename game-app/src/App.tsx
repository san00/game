import React, { useState } from "react";
import GlobalStyle from "./global/global-style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Game from "./components/game/Game";
import Results from "./components/results/Results";

const App: React.FC<Record<string, never>> = () => {
	const [score, setScore] = useState<number>(0);
	const [userChoice, setUserChoice] = useState<string>("");
	const [userMessage, setUserMessage] = useState<string>("");

	return (
		<Router>
			<GlobalStyle />
			<main>
				<Header score={score} />
				<Switch>
					<Route exact path="/">
						<Game setUserChoice={setUserChoice} />
					</Route>
					<Route path="/results">
						<Results score={score} setScore={setScore} choice={userChoice} userMessage={userMessage} setUserMessage={setUserMessage} />
					</Route>
				</Switch>
				<Footer />
			</main>
		</Router>
	);
}

export default App;
