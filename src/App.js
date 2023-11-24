import { useState, useEffect } from 'react';
import './App.css';
import { extractLocations, getEvents } from './api';
import CitySearch from './components/CitySearch/CitySearch';
import EventList from './components/EventList/EventList';
import NumberOfResults from './components/NumberOfResults/NumberOfResults';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { InfoAlert } from './components/Alert/Alert'; 

function App() {

    const [resultCount, setResultCount] = useState(32);
    const [selectedCity, setSelectedCity] = useState('');
    const [events, setEvents] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [infoAlert, setInfoAlert] = useState('');

    const fetchData = async () => {
        setIsLoading(true);
        const allEvents = await getEvents();
        setLocations(await extractLocations(allEvents));
        setEvents(allEvents);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    
    return (
        isLoading?
            (
                <div>
                    <LoadingScreen />
                </div>
            ):(
                <div className="App">
                    <div className='alerts-container'>
                        {infoAlert.length &&
                            <InfoAlert text={infoAlert} />
                        }
                    </div>
                    <CitySearch 
                        allLocations = {locations}
                        setSelectedCity = {setSelectedCity}
                        setInfoAlert = {setInfoAlert}
                        />
                    <NumberOfResults
                        numberOfResults = {(resultCount) => setResultCount(resultCount)}
                    />
                    <EventList 
                        events = {events}
                        resultCount = {resultCount}
                        selectedCity = {selectedCity}/>
                </div>
            )
    );
}

export default App;
