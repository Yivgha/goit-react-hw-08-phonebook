import { HiOutlineTrash } from 'react-icons/hi';
import {
  DeleteBtn,
  ItemContacts,
  ListContacts,
  TextContacts,
} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';

export function Contacts() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ListContacts>
      {filteredContacts.map(({ id, name, number }) => (
        <ItemContacts key={id}>
          <TextContacts>
            {name} : {number}
          </TextContacts>
          <DeleteBtn
            type="button"
            onClick={() => {
              dispatch(contactsOperations.deleteContact(id));
            }}
          >
            <HiOutlineTrash />
          </DeleteBtn>
        </ItemContacts>
      ))}
    </ListContacts>
  );
}