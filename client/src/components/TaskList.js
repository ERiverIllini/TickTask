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
    };

    render() {
        const { tasks } = this.props.task;
        return (
          <Container>
            <ListGroup>
              <TransitionGroup className="shopping-list">
                {tasks.map(({ _id, name }) => (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      {name}
                      <Button
                        className="remove-btn float-right"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
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