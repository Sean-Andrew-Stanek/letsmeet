import {render, screen} from '@testing-library/react';
import Event from '../components/Event';
import { getTestEvents } from '../api';


//Feature 2.3
//There is a collapse button
//It defaults to "close"
//The event details are not shown
//There is an h2 with {event.summary}
//text is {event.start.dateTime<br>{event.summary}{event.location}}

//The user can click open
//The event details of the specified event are opened
//<h2>{event.summary}
//text: {event.start.dateTime<br>{event.summary}{event.location}}
//<h3>About event:<br><br>
//<a href = {event.htmlEvent}>See details on Google Calendar</a><br><br>
//text: {event.description}


//The user can then click close
//The even details of the specified event are then not displayed