import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getTasks, deleteTask } from '../actions/taskActions';
import PropTypes from 'prop-types';

class TaskList extends Component {

    componentDidMount() {
      this.props.getTasks();
    }

    onDeleteClick = (id) => {
      this.props.deleteTask(id);
    }

    render() {
        const { tasks } = this.props.task;
        return (
          <Container>
            {/* <Button
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
              Add Task
            </Button> */}
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
                        onClick={this.onDeleteClick.bind(this, id)}
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

TaskList.propTypes = {
  getTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  task: state.task
});

export default connect(
  mapStateToProps,
  { getTasks, deleteTask }
)(TaskList);