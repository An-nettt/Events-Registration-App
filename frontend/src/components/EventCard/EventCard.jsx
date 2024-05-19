import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Item, Button } from './EventCard.styled';

const EventCard = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  //   function closeModal() {
  //     setIsModalOpen(false);
  //   }

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
// {
//   isModalOpen && (
//     <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
//       <AdvertCardModal closeModal={closeModal} carEl={carEl} />
//     </MainModal>
//   );
// }
