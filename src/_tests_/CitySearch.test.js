
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CitySearch from '../components/CitySearch';

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
});



