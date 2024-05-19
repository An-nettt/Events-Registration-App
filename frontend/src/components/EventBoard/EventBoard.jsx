import EventCard from '../EventCard/EventCard';

import { Gallery } from './EventBoard.styled';

const EventBoard = ({ array }) => {
  return (
    <>
      <Gallery>
        {array
          ? array.map((event) => <EventCard event={event} key={event._id} />)
          : null}
      </Gallery>
    </>
  );
};

export default EventBoard;
