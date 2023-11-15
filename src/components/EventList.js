import Event from './Event';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


const EventList = ({events, resultCount, selectedCity}) => {

    let [filteredEvents, setFilteredEvents] = useState(events.slice(0,resultCount));

    useEffect(() => {
        let newFilteredEvents = events;
        //UNTESTED
        if(selectedCity)
            newFilteredEvents = newFilteredEvents.filter((event) => (event.location === selectedCity));
        
        newFilteredEvents = newFilteredEvents.slice(0,resultCount);
        
        setFilteredEvents(newFilteredEvents);
    }, [resultCount, selectedCity, events]);

    return (
        <div 
            id="event-list" 
            role="list"
        >
            {events &&
                (filteredEvents.map(event => <Event key={event.id} event = {event} />))
            }
        </div>
    );
}

EventList.defaultProps = {
    resultCount: 32,
    selectedCity: ''
}

EventList.propTypes = {
    events: PropTypes.array.isRequired,
    resultCount: PropTypes.number.isRequired,
    selectedCity: PropTypes.string.isRequired
};

export default EventList;