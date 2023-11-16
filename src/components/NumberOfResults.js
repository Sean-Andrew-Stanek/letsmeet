
import {useState} from 'react';
import PropTypes from 'prop-types';

const NumberOfResults = ({numberOfResults}) => {

    const [inputText, setInputText] = useState(32);

    const handleInputChanged = (event) => {
        
        const eventValue = event.target.value;
        numberOfResults(parseInt(eventValue, 10));
        setInputText(eventValue);

    }

    return (
        <form id="number-of-results">
            <label>Number of Results</label><br/>
            <input 
                type='text'
                className='numOfResults'
                value={inputText}
                placeholder='32'
                onChange={handleInputChanged}
            >
            </input>
        </form>
    );
}

NumberOfResults.propTypes = {
    numberOfResults: PropTypes.func.isRequired,
}

export default NumberOfResults;
