import { Item, Title, Text } from './EventParticipantsCard.styled';

const EventParticipantsCard = ({ user }) => {
  return (
    <Item>
      <Title>{user.name}</Title>
      <Text>{user.email}</Text>
    </Item>
  );
};

export default EventParticipantsCard;
