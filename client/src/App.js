import React, { Component } from 'react';
import {Container} from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';


var mainApp = {};

(function(){
	//var firebase = app_fireBase
var uid = null;
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
		  // User is signed in.
		  uid = user.uid;
		} else {
			uid = null;
			window.location.replace("login.html")
		}
	  });

	  function logOut(){
		  firebase.auth().signOut();
	  }

	  mainApp.logOut = logOut;
})()

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<AppNavbar/>
					<Container>
						<TaskModal />
					<Container className="Task">
						<h2>Task Assigner</h2>
						<TaskList />
					</Container>
					<Container className="Additional">
						<h2>Calendar</h2>
						<iframe title="calendar" src="https://calendar.google.com/calendar/embed?src=qimsathhev6lc67eh43oeko30c%40group.calendar.google.com&ctz=America%2FChicago" className="Calendar"></iframe>
					</Container>
					</Container>
				</div>
			</Provider>
		);
  	}
}

export default App;