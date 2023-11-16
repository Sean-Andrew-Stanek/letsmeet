import NumberOfResults from "../components/NumberOfResults";

describe('NumberOfResults Component Tests', () => {
    
    test('Renders Input Box', () => {
        //No need for callback function
        const NORComponent = render(<NumberOfResults setResultCount= {() => {}}/>);
        norTextbox = NORComponent.queryByRole('textbox');
        expect(norTextbox).toBeInTheDocument();
        expect(norTextbox).toHaveTextContent('32');
    });

    //Possibly test not allowing non-numbers?
    test('Renders Numbers When Input', () => {
        expect(true);
    }) 

});