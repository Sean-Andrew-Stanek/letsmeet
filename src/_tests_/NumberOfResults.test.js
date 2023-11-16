
import NumberOfResults from "../components/NumberOfResults";
import {render, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('NumberOfResults Component Tests', () => {
    
    let NORComponent;
    let norTextbox;
    const mockFunction = jest.fn();

    beforeEach(() => {
        //No need for callback function
        NORComponent = render(<NumberOfResults numberOfResults={mockFunction}/>);
        norTextbox = NORComponent.queryByRole('textbox');
    })

    //AT START
    //EXPECT COMP:  Input Box
    //VALUE:        32
    test('Renders Input Box', () => {
        expect(norTextbox).toBeInTheDocument();
        expect(norTextbox).toHaveValue('32');
    });

    //WHEN USER:    Deletes initial value and inserts 10
    //COMP:         Input Box
    //VALUE:        10
    test('Renders Numbers When Input', async() => {
        const user = userEvent.setup();
        await user.type(norTextbox, '{backspace}{backspace}10');
        expect(norTextbox).toHaveValue('10');

    });

});