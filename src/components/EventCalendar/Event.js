import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/Event.css';

const Event = ({text, date, deleteEvent, index}) => {
    return (
        <div className="Event">
            {text}
            <Button onClick={() => deleteEvent(text, date)}variant="danger">X</Button>
        </div>
    )
}

export default Event;