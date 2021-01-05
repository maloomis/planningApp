import React, { useReducer} from 'react';
import { Button, Modal, Form, FormControl } from 'react-bootstrap';

const initialState = {
    show: false,
    value: ''
}

const updateState = (state, action) => {
    switch(action.type) {
        case 'SET_SHOW':
            return {
                ...state,
                show: action.show
            }
        case 'SET_VALUE':
            return {
                ...state,
                value: action.value
            }
        default:
            throw new Error();
    }

}

const EventModal = ({date, onAddEvent}) => {
    const [state, dispatch] = useReducer(updateState, initialState);

    const showModal = () => {
        dispatch({type: 'SET_SHOW', show: true});
    }

    const closeModal = () => {
        dispatch({type: 'SET_SHOW', show: false});
        dispatch({type: 'SET_VALUE', value: ''})
    }

    function add(date, text) {
        onAddEvent(date, text);
        closeModal();
    }

    const updateValue = (e) => {
        dispatch({type: 'SET_VALUE', value: e.target.value})
    }

    return (
        <>
            <Button
                onClick={showModal}
                >
                Add Event
            </Button>

            <Modal show={state.show}>
                <Modal.Header>
                    <Modal.Title>Enter an Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormControl 
                            value={state.value} 
                            type="text"
                            onChange={updateValue}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        variant="danger"
                        onClick={closeModal}>
                        Cancel
                    </Button>
                    <Button 
                        variant="success"
                        onClick={() => {
                            console.log(state)
                            add(date, state.value)}}>
                        Save Event
                    </Button>
                </Modal.Footer>
            </Modal>
            < br/>
        </>

    )
}

export default EventModal;