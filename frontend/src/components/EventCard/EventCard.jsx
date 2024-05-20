import { useState } from 'react';
import { Link } from 'react-router-dom';

import MainModal from '../Modal/Modal';
import EventModal from '../EventRegistrModal/EventModal';

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
        <Link to={`/event/${event._id}`}>View</Link>;
      </Item>
      {isModalOpen && (
        <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
          <EventModal
            closeModal={closeModal}
            title={event.title}
            idtitle={event._id}
          />
        </MainModal>
      )}
    </>
  );
};

export default EventCard;
