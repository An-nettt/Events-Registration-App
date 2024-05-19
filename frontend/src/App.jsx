import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventsAPI } from '../src/redux/api';
import { selectEvents } from './redux/selectors';

import EventBoard from './components/EventBoard/EventBoard';

import { Title } from './App.styled';

const App = () => {
  const dispatch = useDispatch();

  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(eventsAPI());
  }, [dispatch]);

  return (
    <div>
      <Title>Events</Title>
      <EventBoard array={events.events} />;
    </div>
  );
};

export default App;
