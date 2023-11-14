import {render, screen} from '@testing-library/react';
import EventList from '../components/EventList';
import { getTestEvents } from '../api';

describe('<EventList /> component', () => {
    let allEvents;

    beforeEach(async() => {
        allEvents = await getTestEvents();
        render(<EventList events={allEvents} />);
    })

    //AT START
    //EXPECT COMP:  list
    test('Has an element with the "list" role', () => {
        expect(screen.queryByRole('list')).toBeInTheDocument();
    });

    //AT START / No Input
    //EXPECT COMP:  listItems equal to total number of events
    test('Renders the all the Events when no number is specified.', async () => {
        expect(screen.getAllByRole('listitem')).toHaveLength(allEvents.length);
    });

    //When there is a maxNumber passed, it shows a smaller number of events.
    test('Renders one event when asked for one event', async() => {
        render(<EventList events={allEvents} maxEventCount={1} />);
        expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });

});