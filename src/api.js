
import testEventData from 'testEventData.js';

/*
*   REQ_PARAM:  List of events
*   MAPS:       events
*   TO ARRAY:   locations
*   ERASING:    duplicates
*   RETURNING   remaining event locations
*/
export const extractLocations = (events) => {
    const locations = events.map((event) => event.location);
    return [...new Set(locations)];
}

/*
*   FETCH:      data
*   FROM:       testEventData.js
*/
export const getTestEvents = async () => {
    return testEventData;
}