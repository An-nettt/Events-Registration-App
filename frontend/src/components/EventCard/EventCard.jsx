import { useState } from 'react';
// import { useSelector } from 'react-redux';

import MainModal from '../Modal/Modal';
import EventModal from '../Event Registr Modal/EventModal';

import { Item, Title, Button } from './EventCard.styled';

const EventCard = ({ event }) => {
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
        <Title>{event.title}</Title>
        <p>{event.description}</p>
        <Button type="button" onClick={openModal}>
          Register
        </Button>
        <Button type="button" onClick={openModal}>
          View
        </Button>
      </Item>
      {isModalOpen && (
        <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
          <EventModal closeModal={closeModal} />
        </MainModal>
      )}
    </>
  );
};

export default EventCard;
