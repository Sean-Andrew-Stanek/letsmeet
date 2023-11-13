import './App.css';
import { extractLocations, getTestEvents } from './api';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import testEventData from './testEventData';


function App() {
    
    const allLocations = extractLocations(testEventData);

    return (
        <div className="App">
            <CitySearch 
                allLocations = {allLocations}/>
            
            <EventList />
        </div>
  );
}

export default App;
