
import {render} from '@testing-library/react';
import CitySearch from '../components/CitySearch';

describe('CitySearch component', () => {
    test('Renders text input.', () => {
        const CitySearchComponent = render(<CitySearch />);
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
    });
});
