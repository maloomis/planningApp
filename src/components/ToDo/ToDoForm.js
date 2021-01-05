import React, { useReducer } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import ToDoList from './ToDoList';

const initialState = {
    todos: [
        {text: "Clean room"},
        {text: "Do homework"}
    ],
    value: ''
}

const updateList = (state, action) => {
    switch(action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                value: action.value
            }
        case 'SET_TODO':
            return {
                ...state,
                todos: action.newTodos
            }
        default:
            throw new Error();
    }
}

const ToDoForm = () => {
    const [state, dispatch] = useReducer(updateList, initialState);

    const addItem = e => {
        e.preventDefault();
        if (!state.value) return;
        addToDo(state.value);
        let value = '';
        dispatch({type: 'SET_VALUE', value});
    };

    const addToDo = text => {
        const newTodos = [...state.todos, { text }];
        dispatch({type: 'SET_TODO', newTodos});
    }
    
    const completeToDo = index => {
        const newTodos = [...state.todos];
        newTodos[index].isCompleted = true;
        dispatch({type: 'SET_TODO', newTodos});
    }
    
    const deleteToDo = index => {
        const newTodos = [...state.todos];
        newTodos.splice(index, 1);
        dispatch({type: 'SET_TODO', newTodos});
    }
    
    const handleChange = e => {
        let value = e.target.value;
        dispatch({type: 'SET_VALUE', value});
    }
    
    return (
        <div className="toDoForm">
            <Form onSubmit={addItem}>
                <Form.Group as={Row}>
                    <Form.Label column sm="auto">
                    To Do:
                    </Form.Label>
                    <Col sm="auto">
                        <Form.Control 
                            value={state.value} 
                            type="text"
                            onChange={handleChange} />
                    </Col>
                    <Col sm="auto">
                        <Button className="button" variant="light" type="submit">Add</Button>
                    </Col>
                </Form.Group>
            </Form>
            <ToDoList 
                completeToDo={completeToDo}
                deleteToDo={deleteToDo}
                list={state.todos} />
        </div>
    );
};

export default ToDoForm;