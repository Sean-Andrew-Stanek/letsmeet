import Event from './Event';
import PropTypes from 'prop-types';

const EventList = ({events, maxEventCount}) => {
    return (
        <div 
            id="event-list" 
            role="list"
        >
            {events && (
                maxEventCount?
                    (events.map(event => <Event key={event.id} event = {event} />).slice(0, maxEventCount)):
                    (events.map(event => <Event key={event.id} event = {event} />))
            )}
        </div>
    );
}

EventList.propTypes = {
    events: PropTypes.array.isRequired,
    maxEventCount: PropTypes.number,
};

export default EventList;