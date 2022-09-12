import { VscTrash } from 'react-icons/vsc';
import {
  ListContacts,
  ItemContacts,
  TextContacts,
  DeleteBtn,
} from './Contacts.styled';
import { useGetContactsQuery } from '../../redux/contactsSlice';
import { getVisibleContacts } from '../../redux/filter/filterSlice';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

export function Contacts() {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const visibleContacts = useSelector(state =>
    getVisibleContacts(state, contacts)
  );

  return (
    <ListContacts>
      {visibleContacts.map(({ id, name, phone }) => (
        <ItemContacts key={id}>
          <TextContacts>
            {name}: {phone}
          </TextContacts>
          <DeleteBtn type="button"
            disabled={isLoading}
            onClick={() => deleteContact(id)}>
            <VscTrash />
          </DeleteBtn>
        </ItemContacts>
      ))}
    </ListContacts>
  );
};