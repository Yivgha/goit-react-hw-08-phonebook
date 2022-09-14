import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { nameValidate, numberValidate } from 'helpers';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { Notify } from 'notiflix';

const theme = createTheme();

export function Form() {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const onSubmit = data => {
    const { name, number } = data;
    const isContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (!isContact) {
      dispatch(contactsOperations.addContact({ name, number }));
      reset({ data });
      return;
    }
    Notify.alert(`${name} is already in contacts`);
    reset({ data });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component="div" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column' }}>
          <Typography component="h1" variant="h5">
            ADD CONTACT FORM
          </Typography>
          <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2, display: 'flex', flexDirection: 'column' }}>
            <Controller control={control} rules={nameValidate} name="name" defaultValue="" render={({ field }) => (
              <TextField
                autoFocus autoComplete="off" label="Name"
                onChange={e => field.onChange(e)}
                value={field.value || ''}
                error={!!errors.name?.message}
                helperText={errors.name?.message}
                margin="normal"
                sx={{ maxWidth: '350px' }}
              />)}
            />
            <Controller control={control} name="number" rules={numberValidate} render={({ field }) => (
              <TextField type="tel" label="Number" autoFocus autoComplete='off' defaultValue=''
                onChange={e => field.onChange(e)}
                value={field.value || ''}
                error={!!errors.name?.message}
                helperText={errors.number?.message}
              sx={{ maxWidth: '350px' }}/>
            )} />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, maxWidth: '150px' }}>Add Contact</Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};