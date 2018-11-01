import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, ListGroupItemHeading, Button} from 'reactstrap';
<<<<<<< HEAD

=======
import Sidebar from 'react-sidebar';
>>>>>>> Experimented with CSS for front page

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TaskList from './components/TaskList';
import SideBar from './components/SideBar';


const mql = window.matchMedia(`(min-width: 750px)`);


class App extends Component {

	

	render() {
		return (
			<div className="App">
<<<<<<< HEAD
				<Container  className="SideBar">
				<SideBar />
=======
				<Container className="SideBar">
					<Sidebar 
					sidebar={
						<ListGroup>
							<ListGroupItemHeading><h1>Menu</h1></ListGroupItemHeading>
							<Button className = "side-bar-btn">Calendar</Button>
							<Button className = "side-bar-btn">Tasks</Button>
							<ListGroupItemHeading>Tasks</ListGroupItemHeading>
							<ListGroup>
								<ListGroupItemHeading>Classes</ListGroupItemHeading>
								<ListGroupItem>CS196</ListGroupItem>
								<ListGroupItem>CS126</ListGroupItem>
								<ListGroupItem>PHIL102</ListGroupItem>
							</ListGroup>
						</ListGroup>}
					open={this.state.sidebarOpen}
					docked={this.state.sidebarDocked}
					onSetOpen={this.onSetSidebarOpen}
					shadow={false}
					>	
					</Sidebar>
>>>>>>> Experimented with CSS for front page
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
*/
/*
Add button
Google calendar
Call priority function and sort tasks
=======
>>>>>>> Experimented with CSS for front page
*/