import Event from './Event';
import PropTypes from 'prop-types';

const EventList = ({events}) => {
    return (
        <div 
            id="event-list" 
            role="list"
        >
            {events ?
            events.map(event => <Event key={event.id} event = {event} />):
            null}
        </div>
    );
}

EventList.protoTypes = {
    event: PropTypes.shape({}).isRequired,
};

export default EventList;