import Event from './Event';
import PropTypes, { number } from 'prop-types';

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

EventList.protoTypes = {
    event: PropTypes.shape({}).isRequired,
    maxEventCount: PropTypes.instanceOf(number),
};

export default EventList;