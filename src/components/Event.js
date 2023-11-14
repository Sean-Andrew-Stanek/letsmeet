import PropTypes from 'prop-types';

const Event = (event) => {
    return (
        <div role="listitem"></div>
    );
}


Event.propTypes = {
    event: PropTypes.shape({}).isRequired,
}

export default Event;
