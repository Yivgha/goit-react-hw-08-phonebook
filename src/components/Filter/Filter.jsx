import { IoFilterOutline } from 'react-icons/io5';
import { Wrapper, TitleFilter, InputFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { changedFilter } from 'redux/contacts/contacts-action';

export function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.contacts.filter);

  return (
    <Wrapper>
      <TitleFilter>
        Find contacts by name <IoFilterOutline />
      </TitleFilter>
      <InputFilter
        type="text" name="filter" value={value}
       onChange={e => dispatch(changedFilter(e.currentTarget.value))}
      />
    </Wrapper>
  );
};