import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventsAPI } from '../../redux/events/eventsApi.js';
import { getAllUsersAPI } from '../../redux/users/usersApi.js';
import { selectEvents } from '../../redux/events/eventsSelectors.js';

import EventBoard from '../../components/EventBoard/EventBoard.jsx';

import { Title } from './EventPage.styled.js';

const EventPage = () => {
  const dispatch = useDispatch();

  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(eventsAPI());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsersAPI());
  }, [dispatch]);

  return (
    <div>
      <Title>Events</Title>
      <EventBoard array={events.events} />;
    </div>
  );
};

export default EventPage;
