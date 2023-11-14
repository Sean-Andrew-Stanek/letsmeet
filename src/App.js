import { useState } from 'react';
import './App.css';
import { extractLocations } from './api';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfResults from './components/NumberOfResults';
import testEventData from './testEventData';


function App() {

    const [resultCount, setResultCount] = useState(32);
    const [selectedCity, setSelectedCity] = useState('');

    // Needs to be async when we extract the real data
    const allLocations = extractLocations(testEventData);
    
    return (
        <div className="App">
            <CitySearch 
                allLocations = {allLocations}
                setSelectedCity = {(selectedCity) => setSelectedCity(selectedCity)}
                />
            <NumberOfResults
                numberOfResults = {(resultCount) => setResultCount(resultCount)}
            />
            <EventList 
                events = {testEventData}
                resultCount = {resultCount}
                selectedCity = {selectedCity}/>
        </div>
  );
}

export default App;
