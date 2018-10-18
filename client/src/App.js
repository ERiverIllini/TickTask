import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, ListGroupItemHeading} from 'reactstrap';
import Sidebar from 'react-sidebar';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const mql = window.matchMedia(`(min-width: 800px)`);


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sidebarDocked: mql.matches,
			sidebarOpen: false
		};

		this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
		this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
	}

	//REDUX

	componentWillMount() {
		mql.addListener(this.mediaQueryChanged);
	}
	
	componentWillUnmount() {
		mql.removeListener(this.mediaQueryChanged);
	}
	
	onSetSidebarOpen(open) {
		this.setState({ sidebarOpen: open });
	}
	
	mediaQueryChanged() {
		this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
	}

	render() {
		return (
			<div className="App">
				<Container className="SideBar">
					<Sidebar 
					sidebar={
						<ListGroup>
							<ListGroupItemHeading><h1>Menu</h1></ListGroupItemHeading>
							<ListGroupItemHeading>Calendar</ListGroupItemHeading>
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
					onSetOpen={this.onSetSidebarOpen}>	
					</Sidebar>
				</Container>
				<Container className="Task">
				<h2>EAT ASS REACT</h2>
					<ul>
						<li>1</li> <li>2</li> <li>3</li>
						<li>4</li> <li>5</li> <li>6</li>
						<li>7</li> <li>8</li> <li>9</li>
						<li>1</li> <li>2</li> <li>3</li>
						<li>4</li> <li>5</li> <li>6</li>
						<li>7</li> <li>8</li> <li>9</li>
						<li>1</li> <li>2</li> <li>3</li>
						<li>4</li> <li>5</li> <li>6</li>
						<li>7</li> <li>8</li> <li>9</li>
						<li>7</li> <li>8</li> <li>9</li><li>7</li> <li>8</li> <li>9</li><li>7</li> <li>8</li> <li>9</li><li>7</li> <li>8</li> <li>9</li>
					</ul>
				</Container>
				<Container className="Additional">
					<h1>Hello</h1>
						<ul>	
							<li>1</li> <li>2</li> <li>3</li>
							<li>4</li> <li>5</li> <li>6</li>
							<li>7</li> <li>8</li> <li>9</li>
							<li>1</li> <li>2</li> <li>3</li>
							<li>4</li> <li>5</li> <li>6</li>
							<li>7</li> <li>8</li> <li>9</li>
							<li>1</li> <li>2</li> <li>3</li>
							<li>4</li> <li>5</li> <li>6</li>
							<li>7</li> <li>8</li> <li>9</li>
							<li>7</li> <li>8</li> <li>9</li><li>7</li> <li>8</li> <li>9</li><li>7</li> <li>8</li> <li>9</li><li>7</li> <li>8</li> <li>9</li>
						</ul>
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