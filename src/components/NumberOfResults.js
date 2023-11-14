
import {useState} from 'react';
import PropTypes from 'prop-types';

const NumberOfResults = (setResultCount) => {

    const [inputText, setInputText] = useState(32);

    const handleInputChanged = (event) => {
        const eventValue = event.target.value;
        
        setResultCount(eventValue);
        setInputText(eventValue);
    }

    return (
        <form>
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
