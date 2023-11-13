import {render, screen} from '@testing-library/react';
import Event from '../components/Event';
import { getTestEvents } from '../api';


//Feature 2.3
//There is a collapse button
//It defaults to "close"
//The event details are not shown


//The user can click open
//The event details of the specified event are opened


//The user can then click close
//The even details of the specified event are then not displayed