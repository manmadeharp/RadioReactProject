import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Schedule from './containers/Schedule.js';


function App() {
	
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Schedule}/>
				</Switch>
			</BrowserRouter>
		</div>
  );
}

export default App;
