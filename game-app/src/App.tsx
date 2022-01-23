import React, { useState } from "react";
import GlobalStyle from "./global/global-style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Game from "./components/game/Game";
import Results from "./components/results/Results";
import Rules from "./components/rules/Rules";

const App: React.FC<Record<string, never>> = () => {
	const [score, setScore] = useState<number>(0);
	const [userChoice, setUserChoice] = useState<string | undefined>();
	const [compChoice, setCompChoice] = useState<string | number | undefined>();
	const [userMessage, setUserMessage] = useState<string>("");
	const [showRules, setShowRules] = useState<boolean | undefined>(false);

	return (
		<Router>
			<GlobalStyle />
			<main>
				<Header score={score} />
				<Switch>
					<Route exact path="/">
						<Game setUserChoice={setUserChoice} setCompChoice={setCompChoice} />
					</Route>
					<Route path="/results">
						<Results
							score={score}
							setScore={setScore}
							choice={userChoice}
							computerChoice={compChoice}
							userMessage={userMessage}
							setUserMessage={setUserMessage}
						/>
					</Route>
				</Switch>
				{showRules && <Rules setShowRules={setShowRules} />}
				<Footer setShowRules={setShowRules} />
			</main>
		</Router>
	);
};

export default App;
