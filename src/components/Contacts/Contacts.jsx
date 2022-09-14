import { VscTrash } from 'react-icons/vsc';
import {
  ListContacts,
  ItemContacts,
  TextContacts,
  DeleteBtn,
} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';

export function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ListContacts>
      {filteredContacts.map(({ id, name, phone }) => (
        <ItemContacts key={id}>
          <TextContacts>
            {name}: {phone}
          </TextContacts>
          <DeleteBtn type="button" onClick={() => dispatch(contactsOperations.deleteContact(id))}>
            <VscTrash />
          </DeleteBtn>
        </ItemContacts>
      ))}
    </ListContacts>
  );
};