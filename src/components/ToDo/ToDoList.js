import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({list, completeToDo, deleteToDo}) =>{
    return (
        list.map((item, index) => (
            <ToDo 
                key={index}
                text= {item.text}
                isCompleted= {item.isCompleted}
                index = {index}
                completeToDo={completeToDo}
                deleteToDo={deleteToDo}
                />
            )
        )
    );
}

export default ToDoList;