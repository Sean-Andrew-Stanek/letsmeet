 import { useState } from 'react';

const CitySearch = ( {allLocations}) => {
    
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChanged = (event) => {
        const eventValue = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
            return location.toLowerCase().indexOf(value.toLowerCase()) > -1;
        }) : [];

        setQuery(eventValue);
        setSuggestions(filteredLocations);
    };

    return (
        <div id="city-search">
            <input
                type="text"
                className="city"
                value={query}
                placeholder="Search for a city"
                onFocus={() => setShowSuggestions(true)}
                onChange={handleInputChanged}
            />
            {showSuggestions ? 
                <ul 
                    className='suggestions'
                >
                    {suggestions.map((suggestion) => {
                        return <li key={suggestion}> {suggestion} </li>
                    })}
                    <li key='See all cities'>
                        <b>See All Cities</b>
                    </li>
                </ul>
                :null}
        </div>
    )

}

 export default CitySearch;