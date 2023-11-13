import {render, screen} from '@testing-library/react';
import EventList from '../components/EventList';
import { getTestEvents } from '../api';

describe('<EventList /> component', () => {
    

    beforeEach(() => {
        CitySearchComponent = render(<CitySearch />);
    })

    //AT START
    //EXPECT COMP:  list
    test('Has an element with the "list" role', () => {
        expect(CitySearchComponent.queryByRole('list')).toBeInTheDocument();
    });

    //AT START / No Input
    //EXPECT COMP:  listItems equal to total number of events
    test('Renders the correct number of Events.', async () => {
        const allEvents = await getTestEvents();
        CitySearchComponent.rerender(<EventList events={allEvents} />);
        expect(screen.getAllByRole('listitem')).toHaveLength(allEvents.length);
    });

    //When there is a maxNumber passed, it shows a smaller number of events.
    test('Renders all events when there is no numbers passed'), async() => {
        const allEvents = await getTestEvents();
        CitySearchComponent.rerender(<)

    }

});