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
            availability: this.state.availability,
            name: this.state.name,
            dateDue: this.state.dateDue,
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
                                    placeholder="Enter Task Name"
                                    onChange={this.onChange}
                                />
                                <Label for="availability">Availibility</Label>
                                <Input
                                    type="text"
                                    name="availability"
                                    id="task"
                                    placeholder="Enter Availibility"
                                    onChange={this.onChange}
                                />
                                <Label for="dateDue">Due Date</Label>
                                <Input
                                    type="date"
                                    name="dateDue"
                                    id="task"
                                    placeholder="Enter Date Due"
                                    onChange={this.onChange}
                                />
                                <Label>Additional Details</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    name="timeNeed"
                                    id="task"
                                    placeholder="Enter Time Needed"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="number"
                                    min="0"
                                    name="difficulty"
                                    id="task"
                                    placeholder="Enter Difficulty"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="number"
                                    min="0"
                                    name="percent"
                                    id="task"
                                    placeholder="Enter percent of grade"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="number"
                                    min="0"
                                    name="core"
                                    id="task"
                                    placeholder="Enter 0 to 10 depending on how much it matters to your core curriculum"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="number"
                                    min="0"
                                    name="interest"
                                    id="task"
                                    placeholder="Enter 0 to 10 depending on how much you care"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="number"
                                    min="0"
                                    name="predictable"
                                    id="task"
                                    placeholder="Number from 0 to 10 depending on how predictable it is"
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