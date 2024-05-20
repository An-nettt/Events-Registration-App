const EventParticipantsCard = ({ user }) => {
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </>
  );
};

export default EventParticipantsCard;
