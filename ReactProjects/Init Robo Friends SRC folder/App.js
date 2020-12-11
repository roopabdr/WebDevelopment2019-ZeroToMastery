import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		//custom function
		this.setState({ searchfield: event.target.value });		
	}

	render() {
		const filteredRobots = this.state.robots.filter( (robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		return (
		<div className = 'tc'>
		<h1 className='f1'>Robo Friends</h1>
		<SearchBox searchChange = {this.onSearchChange}/>
		<CardList robots = {filteredRobots}/>
		</div>
		);
	}
}

export default App;