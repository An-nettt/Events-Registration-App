import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eventsAPI } from '../../redux/events/eventsApi.js';
import { getAllUsersAPI } from '../../redux/users/usersApi.js';
import { selectEvents } from '../../redux/events/eventsSelectors.js';
import usePagination from '../../hooks/usePagination';

import EventBoard from '../../components/EventBoard/EventBoard.jsx';


import {
  Title,
  Text,
  Button,
  PaginationContainer,
  PaginationButton,
} from './eventPage.styled.js';

const EventPage = () => {
  const dispatch = useDispatch();
  const eventsData = useSelector(selectEvents);

  useEffect(() => {
    dispatch(eventsAPI());
    dispatch(getAllUsersAPI());
  }, [dispatch]);

  const [sortedData, setSortedData] = useState([]);
  const [sortType, setSortType] = useState('asc');

   useEffect(() => {
     if (eventsData.events.length > 0) {
       setSortedData(eventsData.events);
     }
   }, [eventsData.events]);

  const sortData = (key) => {
    if (!sortedData.length) { return }; 
    let sortedArray = [...eventsData.events];
    
    sortedArray.sort((a, b) => {
      if (sortType === 'asc') {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
    setSortedData(sortedArray);
  };

  const handleButtonClick = (buttonName) => {
     setSortType(sortType === 'asc' ? 'desc' : 'asc');
     sortData(buttonName);
  };

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    totalPages,
  } = usePagination({
    contentPerPage: 8,
    count: sortedData.length,
  });

  return (
    <>
      <Title>Events</Title>
      <div>
        <Text>Sort by: </Text>
        <Button
          type="button"
          name="title"
          onClick={() => handleButtonClick('title')}
        >
          Title
        </Button>
        <Button
          type="button"
          name="date"
          onClick={() => handleButtonClick('date')}
        >
          Event date
        </Button>
        <Button
          type="button"
          name="organizer"
          onClick={() => handleButtonClick('organizer')}
        >
          Organizer
        </Button>
      </div>
      <EventBoard
        array={sortedData.slice(firstContentIndex, lastContentIndex)}
      />
      <PaginationContainer>
        <PaginationButton onClick={prevPage} disabled={page === 1}>
          Previous
        </PaginationButton>
        <span>{`Page ${page} of ${totalPages}`}</span>
        <PaginationButton onClick={nextPage} disabled={page === totalPages}>
          Next
        </PaginationButton>
      </PaginationContainer>
    </>
  );
};

export default EventPage;


