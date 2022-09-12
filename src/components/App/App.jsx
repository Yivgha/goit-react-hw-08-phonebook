import { Form } from 'components/Form';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { useGetContactsQuery } from '../../redux/contactsSlice';
import { Container, MainTitle, Title } from './App.styled';

export function App() {

  const { status, data } = useGetContactsQuery();

    return (
      <Container>
        <MainTitle>Phone book</MainTitle>
        <Form />
        {status === 'fulfilled' && data.length !== 0 && <Title>Contacts</Title>}
        {status === 'fulfilled' && data.length !== 0 && <Filter />}
        <Contacts />
      </Container>
    );
};