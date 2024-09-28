import EventCard from '../EventCard/EventCard';

import { List } from './EventBoard.styled';

const EventBoard = ({ array, arraySort }) => {
 return (
    <>
      <List>
        {array
          ? array.map((event) => <EventCard event={event} key={event._id} />)
          : null}
      </List>
    </>
  );
};

export default EventBoard;
