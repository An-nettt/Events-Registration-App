import {
  ModalDialog,
  DialogTitle,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Checkbox,
} from '@mui/joy';
import { useState } from 'react';

const EventModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <ModalDialog color="neutral" size="lg" variant="soft">
      <DialogTitle>Event registration</DialogTitle>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
      >
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
          <FormControl>
            <FormLabel>Where did you hear about this event?</FormLabel>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Checkbox label="Social media" />
              <Checkbox label="Friends" />
              <Checkbox label="Found myself" />
            </Box>
          </FormControl>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </ModalDialog>
  );
};

export default EventModal;
