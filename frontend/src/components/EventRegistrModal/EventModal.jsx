import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import ModalClose from '@mui/joy/ModalClose';

import {
  RegisterForm,
  Thumb,
  Text,
  Input,
  CheckboxText,
  Button,
} from './EventModal.styled';
import { addUser } from '../../redux/users/usersApi';

const userSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required!')
    .min(2, 'Full name must be at least 2 characters long')
    .matches(
      '^[a-zA-Z]+(?:[s.]+[a-zA-Z]+)*$',
      'Full name must contain only letters'
    ),
  email: Yup.string()
    .email()
    .required('Email is required!')
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      'Invalid email address'
    ),
  date: Yup.date().default(() => new Date()),
});

const EventModal = ({ title, idtitle, closeModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    const payload = { ...data, title, idtitle };
    dispatch(addUser(payload));
    reset();
    closeModal();
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
        <Thumb>
          <Input
            name="fullName"
            label="Full name"
            type="text"
            error={Boolean(errors.fullName)}
            helper={errors.fullName?.message}
            {...register('fullName')}
          />

          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            {...register('email')}
          />

          <Input
            name="date"
            label="Date of Birth"
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
            <Button type="submit">Add event participant</Button>
          </div>
        </Thumb>
      </RegisterForm>
    </>
  );
};
export default EventModal;
