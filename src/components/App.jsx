import { fetchContacts } from '../redux/operations.js';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
