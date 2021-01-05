import React from 'react';
import Event from './Event';
import moment from 'moment';

const EventList = ({list, date, deleteEvent}) => {
    let dateString = moment(date).format('LL').toString();

    //check if event date is the same as chosen current date
    let filteredList = list.filter((event) => {
        return event.date.getDay() === date.getDay();
    });
    
    return (
        <>
            <h4>Events For {dateString}</h4>
            {filteredList.map((event, index) => (
                    <Event 
                        key={index}
                        index={index}
                        deleteEvent={deleteEvent}
                        text={event.text}
                        date={event.date} />
                )
            )}
        </>

    )

}

export default EventList;