import { IoFilterOutline } from 'react-icons/io5';
import { changedFilter } from 'redux/contacts/contacts-action';
import { useSelector, useDispatch } from 'react-redux';
import { InputFilter, TitleFilter, Wrapper } from './Filter.styled';

export function Filter() {
  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TitleFilter>
        Find contacts by name <IoFilterOutline />
      </TitleFilter>
      <InputFilter
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changedFilter(e.currentTarget.value))}
      />
    </Wrapper>
  );
}