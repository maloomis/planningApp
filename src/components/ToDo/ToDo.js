import React from 'react';
import { Button } from 'react-bootstrap';

import '../../styles/ToDo.css';

const ToDo = ({text, isCompleted, index, completeToDo, deleteToDo}) => {
    return (
        <div className="ToDo" draggable>
            <div style={{textDecoration: isCompleted ? "line-through" : " "}}>{text}</div>
            <div>
                <Button variant="success" onClick={() => completeToDo(index)}>Complete</Button>
                &nbsp;
                <Button variant="danger" onClick={() => deleteToDo(index)}>X</Button>
            </div>
        </div>

    );
};

export default ToDo;