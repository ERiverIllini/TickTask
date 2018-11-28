import uuid from 'uuid';
import { GET_TASKS, ADD_TASK, DELETE_TASK } from '../actions/types';

const initialState = {
    tasks: [
        { id: uuid(), name: 'CS196 - Project', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2' },
        { id: uuid(), name: 'CS125 - MP', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2' },
        { id: uuid(), name: 'MATH241 - WebAssign', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2'  },
        { id: uuid(), name: 'It hurts', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2'  },
        { id: uuid(), name: 'Im so stressed help me please', timeNeed: '1', difficulty: '2', percent: '5', core: '1', interest: '1', predictable: '2'  }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state
            };
        default:
            return state;
    }
};