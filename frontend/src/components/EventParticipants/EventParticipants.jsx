import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/users/usersSelectors';

import EventParticipantsCard from '../EventParticipantsCard/EventParticipantsCard';

const EventParticipants = () => {
  const { id } = useParams();
  const users = useSelector(selectUsers);

  const matchingUsers = users.list.filter((user) => user.idtitle === id);

  if (matchingUsers.length === 0) {
    return <div>User not found</div>;
  }

  const title = matchingUsers[0].title;

  return (
    <div>
      <h1>{title}</h1>
      {matchingUsers.map((us) => (
        <EventParticipantsCard user={us} key={us._id} />
      ))}
    </div>
  );
};

export default EventParticipants;
