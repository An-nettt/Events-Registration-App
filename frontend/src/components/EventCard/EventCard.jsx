import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Item, Button } from './EventCard.styled';

const EventCard = ({ event }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Item>
        <p>{event.title}</p>
        <p>{event.description}</p>
        <Button type="button" onClick={openModal}>
          Register
        </Button>
        <Button type="button" onClick={openModal}>
          View
        </Button>
      </Item>
    </>
  );
};

export default EventCard;

// {/* <Title> {title} </Title>; */}
