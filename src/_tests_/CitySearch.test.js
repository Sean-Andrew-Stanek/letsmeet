
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';
import { getTestEvents, extractLocations } from '../api';

describe('CitySearch component', () => {
    beforeEach(() => {
        render(<CitySearch />);
    })
    
    //AT START
    //EXPECT COMP:  textbox
    //WITH CLASS:   'city'
    test('Renders text input.', () => {
        const cityTextBox = screen.queryByRole('textbox');
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
    });

    //AT START
    //UNEXPECT COMP:    List
    test('Suggestion list is hidden by default', () => {
        const suggestionList = screen.queryByRole('list');
        expect(suggestionList).not.toBeInTheDocument();
    })

    // WHEN USER:       Clicks textbox
    // EXPECT COMP:     SuggestionList.js
    // WITH CLASS:      'suggestions'
    test('Renders a list of suggestions when the cityTextBox gains focus', async () => {
        const user = userEvent.setup();
        await user.click(screen.queryByRole('textbox'));
        const suggestionList = screen.queryByRole('list');
        expect(suggestionList).toBeInTheDocument();
        expect(suggestionList).toHaveClass('suggestions');
    });

    // LONG TEST / SEE INSIDE
    test('updates the list of suggestions correctly when user types in the cityTextBox', async() =>{
        const user = userEvent.setup();
        const allEvents = await getTestEvents();
        const allLocations = extractLocations(allEvents);
        screen.rerender(<CitySearch allLocations = {allLocations} />);

        // WHEN USER:   Inputs 'Berlin'
        // IN COMP:     'textbox'
        const cityTextBox = screen.queryByRole('textbox');
        await user.type(cityTextBox, 'Berlin');

        // FILTER:          All locations
        // WHICH CONTAIN:   BERLILN
        const suggestions = allLocations ? allLocations.filter((location) => {
            return location.toLowerCase().indexOf(cityTextBox.value.toLowerCase()) > -1;
        }): [];

        // EXPECT COMP:     ListItems
        // WITH LENGTH      Filtered locations + 1
        // FOR EACH         ListItem in parent component
        // EXPECT           Text equals suggestion of equal index
        const suggestionListItems = screen.queryAllByRole('listitem');
        expect(suggestionListItems).toHaveLength(suggestions.length + 1);
        for(let i = 0; i<suggestions.length; i++) {
            expect(suggestionListItems[i].textContent).toBe(suggestions[i])
        }

    })
});



