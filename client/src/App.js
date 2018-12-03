import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, ListGroupItemHeading, Button} from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TaskList from './components/TaskList';
import SideBar from './components/SideBar';
import TaskModal from './components/TaskModal'




class App extends Component {
	render() {
		return (
			<Provider store={store}>
			{/* <Provider> */}
				<div className="App">
					<AppNavbar/>
					<Container>
						<TaskModal />
					<Container className="Task">
						<h2>Task Assignerç</h2>
						<TaskList />
					</Container>
					<Container className="Additional">
						<h2>Calendar</h2>
						<iframe src="https://calendar.google.com/calendar/embed?src=qimsathhev6lc67eh43oeko30c%40group.calendar.google.com&ctz=America%2FChicago" className="Calendar"></iframe>
					</Container>
					</Container>
				</div>
			</Provider>
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
Task background
Category buttons
Checkbox buttons left side 
Checkbox buttons fill box
Logout button
Fix modal UI and types
New modal for when not to assign times
*/

/*
Add button
Google calendar
Call priority function and sort tasks
*/