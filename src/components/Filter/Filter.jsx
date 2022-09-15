import { IoColorFilterSharp } from 'react-icons/io5';
import { changedFilter } from 'redux/contacts/contacts-action';
import { useSelector, useDispatch } from 'react-redux';
import { InputFilter, TitleFilter, Wrapper } from './Filter.styled';
import { theme } from 'styles';

export function Filter() {
  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TitleFilter>
        Find contacts by name <IoColorFilterSharp color={theme.colors.orange}/>
      </TitleFilter>
      <InputFilter
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changedFilter(e.currentTarget.value))}
        sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}
      />
    </Wrapper>
  );
}