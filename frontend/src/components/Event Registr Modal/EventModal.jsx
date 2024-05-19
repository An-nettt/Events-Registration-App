import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  ModalDialog,
  DialogTitle,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Typography,
  Input,
  Box,
  Checkbox,
} from '@mui/joy';
import { addUser } from '../../redux/api';
import { useState } from 'react';

const EventModal = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      id: nanoid(),
      name: event.target[0].value,
      email: event.target[1].value,
      dateBirth: event.target[2].value,
      socMedia: event.target[3].checked,
      friends: event.target[4].checked,
      found: event.target[5].checked,
    };

    console.log(newUser);

    dispatch(addUser(newUser));

    // form.reset();

    setOpen(false);
  };

  return (
    <ModalDialog color="neutral" size="lg" variant="soft">
      <DialogTitle>Event registration</DialogTitle>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Full name</FormLabel>
            <Input autoFocus required />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input required />
          </FormControl>
          <FormControl>
            <FormLabel>Date of birth</FormLabel>
            <Input required />
          </FormControl>

          <Typography>Where did you hear about this event?</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Checkbox label="Social media" />
            <Checkbox label="Friends" />
            <Checkbox label="Found myself" />
          </Box>

          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </ModalDialog>
  );
};
export default EventModal;
