import React, { useReducer } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EventModal from './EventModal';
import EventList from './EventList';

const intialState = {
    eventList: [
        {
            text: 'Vist Grandma',
            date: new Date('12-14-20')
        },
        {
            text: 'Mom\'s Birthday Party',
            date: new Date('12-15-20')
        }
    ],
    date: new Date()
};

const updateState = (state, action) => {
    switch(action.type) {
        case 'SET_DATE':
            return {
                ...state,
                date: action.date
            }
        case 'SET_EVENTLIST':
            return {
                date: state.date,
                eventList: action.eventList
            }
        default:
            throw new Error()
    }
}

function EventTracker() {
    const [state, dispatch] = useReducer(updateState, intialState);

    console.log(state.eventList)
    
    const changeDate = (e) => {
        dispatch({type: 'SET_DATE', date: e})
    }

    const addEvent = (date, text) => {
        const newEventList = [...state.eventList, { text, date }];
        dispatch({type: "SET_EVENTLIST", eventList: newEventList})
    }

    const deleteEvent = (text, date) => {
        let newEventList = [...state.eventList];
        newEventList = newEventList.filter((event) => event.text !== text && event.date !== date);
        dispatch({type: 'SET_EVENTLIST', eventList: newEventList});
    }

    return (
        <>
            <Calendar
                value={state.date}
                onChange={changeDate} />
            <br />
            <EventModal
                date={state.date}
                onAddEvent={addEvent}
            />
            <br />
            <EventList
                date={state.date}
                deleteEvent={deleteEvent}
                list={state.eventList} />
        </>

    )
}

export default EventTracker;