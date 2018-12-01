import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';
import uuid from 'uuid';
class TaskModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: uuid(),
            name: this.state.name,
            timeNeed: this.state.timeNeed,
            difficulty: this.state.difficulty,
            percent: this.state.percent,
            core: this.state.core,
            interest: this.state.interest,
            predictable: this.state.predictable
        }

        this.props.addTask(newTask);
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >Add Task</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Task List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="task">Task</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="task"
                                    placeholder="Enter Task"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="text"
                                    name="timeNeed"
                                    id="task"
                                    placeholder="Enter Time Needed"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="text"
                                    name="difficulty"
                                    id="task"
                                    placeholder="Enter Difficulty"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="text"
                                    name="percent"
                                    id="task"
                                    placeholder="Enter percent of grade"
                                    onChange={this.onChange}
                                />
                                <Label>
                                    <Input
                                        type="checkbox"
                                        name="core"
                                        id="task"
                                        onChange={this.onChange}
                                    />{''}
                                    Core
                                </Label>
                                <Input
                                    type="text"
                                    name="interest"
                                    id="task"
                                    placeholder="Enter 1 if this something you care about, 0 otherwise"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="text"
                                    name="predictable"
                                    id="task"
                                    placeholder="Enter 1 if assignments like this take the amount of time you expect them to, 0 otherwise"
                                    onChange={this.onChange}
                                />
                                <Button 
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Task
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    task: state.task 
}); 

export default connect(mapStateToProps, { addTask })(TaskModal);