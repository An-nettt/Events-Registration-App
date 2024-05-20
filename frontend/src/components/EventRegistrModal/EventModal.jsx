import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import ModalClose from '@mui/joy/ModalClose';

import {
  RegisterForm,
  Text,
  Input,
  CheckboxText,
  Button,
} from './EventModal.styled';
import { addUser } from '../../redux/users/usersApi';

const EventModal = ({ title, idtitle }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const payload = { ...data, title, idtitle };
    dispatch(addUser(payload));
    reset();
  };

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <ModalClose
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        />
        <Text>Full name</Text>
        <Input
          name="fullName"
          type="text"
          placeholder="Full name"
          {...register('name', { required: true })}
        />
        <Text>Email</Text>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        <Text>Date of Birth</Text>
        <Input
          name="date"
          type="date"
          placeholder="Date of Birth"
          {...register('date')}
        />
        <Text>Where did you hear about this event?</Text>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              id="socmedia"
              name="socmedia"
              type="checkbox"
              {...register('socmedia')}
            />
            <CheckboxText htmlFor="socmedia">Social media</CheckboxText>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              id="friends"
              name="friends"
              type="checkbox"
              {...register('friends')}
            />
            <CheckboxText htmlFor="friends">Friends</CheckboxText>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
              id="found"
              name="found"
              type="checkbox"
              {...register('found')}
            />
            <CheckboxText htmlFor="found">Found myself</CheckboxText>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="submit">Add user</Button>
        </div>
      </RegisterForm>
    </>
  );
};
export default EventModal;
