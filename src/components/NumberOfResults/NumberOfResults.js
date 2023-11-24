
import {useState} from 'react';
import PropTypes from 'prop-types';

const NumberOfResults = ({numberOfResults}) => {

    const [inputText, setInputText] = useState(32);
    const [error, setError] = useState(false);

    const handleInputChanged = (event) => {
        const eventValue = event.target.value;
        let returnValue = parseInt(eventValue, 10);
        setError(false);
        if(!returnValue)
        {
            returnValue=0;
            setError(true);
        }
        numberOfResults(returnValue);
        setInputText(returnValue);


    }

    return (
        <form id="number-of-results" onSubmit={(e)=>e.preventDefault()}>
            <label>Number of Results</label><br/>
            {error&&<div style={{color:'red'}}>Only use numbers</div>}
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
