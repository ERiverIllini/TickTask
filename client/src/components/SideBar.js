import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import {Container, ListGroup, ListGroupItem, ListGroupItemHeading, Button} from 'reactstrap';
import uuid from 'uuid';


const mql = window.matchMedia(`(min-width: 750px)`);

class SideBar extends Component {

    state = {
        categories: [
            { id: uuid(), name: 'CS196' },
            { id: uuid(), name: 'CS126' },
            { id: uuid(), name: 'MATH241' },
            { id: uuid(), name: 'TickTask' }
        ]
    }
    
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
        const { categories } = this.state;
        return (
            <Container>
                <Sidebar 
                sidebar={
                    <ListGroup>
                        <h1>Menu</h1>
                        <Button className = "side-bar-btn">Main</Button>
                        <h3>Classes</h3>
                        <ListGroup>
                        {/* {categories.map(({ id, name }) => ( */}
                            <ListGroupItem>
                                <Button className="side-bar-btn">CS125</Button>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button className="side-bar-btn">CS196</Button>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button className="side-bar-btn">Make friends</Button>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button className="side-bar-btn">Stay alive</Button>
                            </ListGroupItem>       
                         {/* ))}                      */}
                        </ListGroup>  
                    </ListGroup>}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
                shadow={false}
               
                >	
                </Sidebar>
                
            </Container>
        ); 
    }
}

export default SideBar;