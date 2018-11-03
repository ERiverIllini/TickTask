import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, ListGroupItemHeading, Button} from 'reactstrap';

import Sidebar from 'react-sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskList from './components/TaskList';
import SideBar from './components/SideBar';




class App extends Component {

	

	render() {
		return (
			<div className="App">
				
				<Container  className="SideBar">
				<SideBar />
				</Container>
				<Container className="Task">
					<h2>Task Assignerç</h2>
					<TaskList />
				</Container>
				<Container className="Additional">
					<h1>Calendar</h1>
					<iframe src="https://calendar.google.com/calendar/embed?src=qimsathhev6lc67eh43oeko30c%40group.calendar.google.com&ctz=America%2FChicago" className="Calendar"></iframe>
				</Container>
			</div>
		);
  	}
}

export default App;

/* 
TODO Add 3 seperate containers
TODO Add Sidebar CSS
TODO Add Sidebar functionality
*/

/*
Background color
Category buttons
Checkbox buttons left side 
Checkbox buttons fill box
<<<<<<< HEAD
<<<<<<< HEAD
*/
/*
Add button
Google calendar
Call priority function and sort tasks
=======
>>>>>>> Experimented with CSS for front page
=======
Add button
>>>>>>> Moved sidebar to a seperate component
*/