import { useState, useEffect } from 'react';
import './App.css';
import { extractLocations, getEvents } from './api';
import CitySearch from './components/CitySearch/CitySearch';
import EventList from './components/EventList/EventList';
import NumberOfResults from './components/NumberOfResults/NumberOfResults';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { InfoAlert, ErrorAlert } from './components/Alert/Alert'; 

function App() {

    const [numberOfResults, setNumberOfResults] = useState(32);
    const [selectedCity, setSelectedCity] = useState('');
    const [events, setEvents] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [infoAlert, setInfoAlert] = useState('');
    const [errorAlert, setErrorAlert] = useState('');

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
                        { errorAlert.length ?
                            <ErrorAlert text={errorAlert} />
                        : infoAlert.length ? 
                            <InfoAlert text={infoAlert} />
                        : null}
                    </div>
                    <CitySearch 
                        allLocations = {locations}
                        setSelectedCity = {setSelectedCity}
                        setInfoAlert = {setInfoAlert}
                        setErrorAlert = {setErrorAlert}
                        />
                    <NumberOfResults
                        setNumberOfResults = {setNumberOfResults}
                    />
                    <EventList 
                        events = {events}
                        numberOfResults = {numberOfResults}
                        selectedCity = {selectedCity}
                        setInfoAlert = {setInfoAlert}/>
                </div>
            )
    );
}

export default App;
