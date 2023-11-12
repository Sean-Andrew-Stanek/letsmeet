
import testEventData from './testEventData.js';

/*
*   REQ_PARAM:  List of events
*   MAPS:       events
*   TO ARRAY:   locations
*   ERASING:    duplicates
*   RETURNING   remaining event locations
*/
export const extractLocations = (events) => {
    const extractedLocations = events.map((event) => event.location);
    const locations = [...new Set(extractedLocations)];
    return locations;
};

/*
*   FETCH:      data
*   FROM:       testEventData.js
*/
export const getTestEvents = async () => {
    return testEventData;
}