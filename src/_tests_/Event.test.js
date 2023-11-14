import {getByRole, queryByRole, render, screen} from '@testing-library/react';
import Event from '../components/Event';
import { getTestEvents, extractLocations } from '../api';



describe('<Event /> Component', () => {
    let EventComponent;
    let testEvent;

    beforeEach(async() => {
        let testEventArray = await getTestEvents();
        testEvent = testEventArray[0];
        EventComponent = render(<Event event={testEvent}/>)
    })
    //Feature 2.3
    //The event details are not shown

    //AT START          (collapsed)
    //EXPECT COMP:      button
    test('Test Feature 2.3: There is a collapse button', () => {
        expect((EventComponent.queryByRole('button')).toBeInTheDocument());
    });
    //EXPECT COMP:      a singel h2 with event.summary
    test('Test Feature 2.3: There is an h2 with the event summary', () => {
        expect(EventComponent.getByRole('heading', {level:2}).textContent.toBe(`${testEvent}`))
    });
    //EXPECT COMP:      text in format {event.start.dateTime<br>{event.summary}{event.location}
    test('Test Feature 2.3: There is a time, summary and location within the collapsed mode', () => {
        let expectedString = `${testEvent.start.dateTime}<br>${testEvent.summary}${testEvent.location}`
        expect(EventComponent.getByText(expectedString).toBeInTheDocument())
    });
    //UNEXPECT COMP:    H3
    test('There are no h3s', () => {
        expect(EventComponent.queryByRole('heading', {level:3})).toBeNull()
    });
    //UNEXPECT COMP:    Anchors
    test('There are no links such as <a>', () => {
        expect(EventComponent.queryByRole('link')).toBeNull();
    });
    //UNEXPECT TEXT:    {event.description}
    test('There is no long event descriptions', () => {
        expect(EventComponent.queryByText(`${testEvent.description}`)).toBeNull();
    })

});
//The user can click open
//The event details of the specified event are opened
//<h2>{event.summary}
//text: {event.start.dateTime<br>{event.summary}{event.location}}
//<h3>About event:<br><br>
//<a href = {event.htmlEvent}>See details on Google Calendar</a><br><br>
//text: {event.description}


//The user can then click close
//The even details of the specified event are then not displayed