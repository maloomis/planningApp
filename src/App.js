import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import ToDoForm from './components/ToDo/ToDoForm';
import Navbar from './components/NavBar';
import EventTracker from './components/EventCalendar/EventTracker';

import './styles/App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="app">
          <Switch>
            <Route path="/todo">
              <ToDoForm /> 
            </Route>
            <Route path="/calendar">
              <EventTracker />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
