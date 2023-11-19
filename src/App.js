import { useState, useEffect } from 'react';
import './App.css';
import { extractLocations, getEvents } from './api';
import CitySearch from './components/CitySearch/CitySearch';
import EventList from './components/EventList/EventList';
import NumberOfResults from './components/NumberOfResults/NumberOfResults';

function App() {

    const [resultCount, setResultCount] = useState(32);
    const [selectedCity, setSelectedCity] = useState('');
    const [events, setEvents] = useState([]);
    const [locations, setLocations] = useState([]);

    const fetchData = async () => {
        const allEvents = await getEvents();
        setLocations(await extractLocations(allEvents));
        setEvents(allEvents);
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    
    return (
        <div className="App">
            <CitySearch 
                allLocations = {locations}
                setSelectedCity = {setSelectedCity}
                />
            <NumberOfResults
                numberOfResults = {(resultCount) => setResultCount(resultCount)}
            />
            <EventList 
                events = {events}
                resultCount = {resultCount}
                selectedCity = {selectedCity}/>
        </div>
  );
}

export default App;
