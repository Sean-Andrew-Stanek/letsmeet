import {render, screen} from '@testing-library/react';
import EventList from '../components/EventList';

describe('<EventList /> component', () => {
    


    test('Has an element with the "list" role', () => {
        render(<EventList />);
        expect(screen.queryByRole('list')).toBeInTheDocument();
    });

    test('Renders the correct number of Events.', () => {
        render(<EventList events={[{ id: 1 },{ id: 2 },{ id: 3 },{ id: 4 }]} />);
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
    });

});

