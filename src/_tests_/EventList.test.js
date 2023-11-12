import {render, screen} from '@testing-library/react';
import EventList from '../components/EventList';
import { getTestEvents } from '../api';

describe('<EventList /> component', () => {
    


    test('Has an element with the "list" role', () => {
        render(<EventList />);
        expect(screen.queryByRole('list')).toBeInTheDocument();
    });

    test('Renders the correct number of Events.', async () => {
        const allEvents = await getTestEvents();
        render(<EventList events={allEvents} />);
        expect(screen.getAllByRole('listitem')).toHaveLength(allEvents.length);
    });

});

