import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../redux/users/usersSelectors';

import EventParticipantsCard from '../EventParticipantsCard/EventParticipantsCard';

import { Title, Input, List, BackLink } from './EventParticipants.styled';

const EventParticipants = () => {
  const { id } = useParams();
  const users = useSelector(selectUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users.list);

  const matchingUsers = users.list.filter((user) => user.idtitle === id);



  useEffect(() => {
    if (matchingUsers.length === 0) {
      setFilteredUsers([]);
    } else {
      const result = matchingUsers.filter(
        (user) =>
          user.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.includes(searchQuery)
      );
      setFilteredUsers(result);
    }
  }, [matchingUsers, searchQuery]);

    if (matchingUsers.length === 0) {
      return (
        <>
          <BackLink to="/">Back to Event Page</BackLink>
          <Title>There are no registered participants yet.</Title>
        </>
      );
    }

  const title = matchingUsers[0].title;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); 
  };

  return (
    <div>
      <BackLink to="/">Back to Event Page</BackLink>

      <h1>Event Search</h1>
      <Input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <Title>"{title}" participants</Title>
      <List>
        {filteredUsers.map((user) => (
          <EventParticipantsCard user={user} key={user._id} />
        ))}
      </List>
    </div>
  );
};

export default EventParticipants;
