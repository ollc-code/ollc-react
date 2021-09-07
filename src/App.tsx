import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

export const App: React.FC = () => {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
