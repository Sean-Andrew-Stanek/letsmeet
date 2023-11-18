import Event from '../Event/Event';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


const EventList = ({events, resultCount, selectedCity}) => {
    
    const allCitiesString = 'See All Cities';

    let [filteredEvents, setFilteredEvents] = useState(events.slice(0,resultCount));

    useEffect(() => {
        let newFilteredEvents = events;
        let filterString = selectedCity;

        if(selectedCity===allCitiesString || selectedCity==='')
            newFilteredEvents = events
        else
            newFilteredEvents = newFilteredEvents.filter((event) => (event.location === filterString));
        
        if(resultCount)
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
    resultCount: PropTypes.number,
    selectedCity: PropTypes.string
};

export default EventList;