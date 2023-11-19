import { defineFeature, loadFeature } from "jest-cucumber";
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    
    let app;

    beforeEach(() => {
      app = render(<App />);
    });
  
    test('When user has not specified a number, 32 events are shown by default', () => {
      given('the user navigates to the events page', () => {
        // Nothing specific needs to be done here, as rendering the App component should handle navigation.
      });
  
      when('the user does not specify the number of events', () => {
        // No specific action is needed, as the default behavior is being tested.
      });
  
      then('32 events should be displayed on the page by default', () => {
        const EventListDOM = AppDOM.querySelector('#event-list');
        const defaultEventCount = within(EventListDOM).queryAllByRole('listitem');
        expect(defaultEventCount).toBe(32);
      });
    });


    test('User can change the number of events displayed', ({ given, when, then }) => {
    
        given('the user is on the events page', () => {
          app = render(<App />);
        });
    
        when('the user specifies a new number of events to be displayed', () => {
          const newNumberOfEvents = 10;
          userEvent.type(screen.queryByRole('listitem'), newNumberOfEvents.toString());
          userEvent.click(screen.getByTestId('number-of-results-button'));
        });
    
        then('the page should display the specified number of events', () => {
          const eventCount = screen.getAllByTestId('event-item').length;
          expect(eventCount).toBe(10); // Adjust based on the specified number in your feature file
        });
      });
      
})