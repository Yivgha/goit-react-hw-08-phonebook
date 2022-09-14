import { Typography } from '@mui/material';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Form } from 'components/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
export function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const asyncFn = async () => {
      dispatch(contactsOperations.fetchContacts());
    };
    asyncFn();
  }, [dispatch]);
  return (
    <>
      <Form />
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <Contacts />
        </>
      ) : (
        <Typography component={'span'} variant={'body2'}>
          You doesn't have any contacts yet
        </Typography>
      )}
    </>
  );
}