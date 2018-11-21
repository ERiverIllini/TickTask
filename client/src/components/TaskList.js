import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class TaskList extends Component {
    state = {
        tasks: [
            { id: uuid(), name: 'CS196 - Project', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2' },
            { id: uuid(), name: 'CS125 - MP', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2' },
            { id: uuid(), name: 'MATH241 - WebAssign', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2'  },
            { id: uuid(), name: 'It hurts', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2'  },
            { id: uuid(), name: 'Im so stressed help me please', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2'  }
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
                const timeNeed = prompt('Enter Time Needed');
                const difficulty = prompt('Enter Difficulty');
                const percent = prompt('Enter percent of grade');
                const core = prompt('Enter 1 if core class, 0 otherwise');
                const interest = prompt('Enter 1 if this something you care about, 0 otherwise');
                const predictable = prompt('Enter 1 if assignments like this take the amount of time you expect them to, 0 otherwise');
                if(name) {
                  this.setState(state => ({
                    tasks: [...state.tasks, { id: uuid(), name, timeNeed, difficulty, percent, core, interest, predictable}]
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