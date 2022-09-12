import { IoFilterOutline } from 'react-icons/io5';
import { Wrapper, TitleFilter, InputFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TitleFilter>
        Find contacts by name <IoFilterOutline />
      </TitleFilter>
      <InputFilter
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </Wrapper>
  );
};