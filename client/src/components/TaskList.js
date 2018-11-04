import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class TaskList extends Component {
    state = {
        tasks: [
            { id: uuid(), name: 'CS196' },
            { id: uuid(), name: 'CS126' },
            { id: uuid(), name: 'MATH241' },
            { id: uuid(), name: 'TickTask' },
            { id: uuid(), name: 'It hurts' },
            { id: uuid(), name: 'Im so stressed help me please' },
            { id: uuid(), name: 'SomethingElse' }
        ]
    }

    render() {
        const { tasks } = this.state;
        return (
          <Container>
            <Button
              color="dark"
              style={{marginBottom: '2rem'}}
              className = "side-bar-btn"
              onClick={() => {
                const name = prompt('Enter Task');
                if(name) {
                  this.setState(state => ({
                    tasks: [...state.tasks, { id: uuid(), name}]
                  }));
                }
              }}
            >
              Add Item
            </Button>
            <ListGroup>
              <TransitionGroup className="shopping-list">
                {tasks.map(({ id, name }) => (
                  <CSSTransition key={id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      {name}
                      <Button
                        className="remove-btn float-right"
                        color="success"
                        size="sm"
                        onClick={() => {
                          this.setState(state => ({
                            tasks: state.tasks.filter(item => item.id !== id)
                          }));
                        }}
                      >
                        &times;
                      </Button>
                    </ListGroupItem>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </ListGroup>
          </Container>
        );
      }
    }

export default TaskList;