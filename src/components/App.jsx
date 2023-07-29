import React, {useState, useEffect} from 'react';
import { Box } from '../components/Box';
import { Tiltle, Contacts} from './App.styled';
import Phonebook from 'components/Phonebook/Phonebook'
import Forms from 'components/Form/Form';
import Filter from './Filter/Filter';
import useLocalStorage from './hooks/useLocalStorage';
// import basicContacts from '../../src/basicContacts';


const App = () => {
   const [contacts, setContacts] = useLocalStorage ([])
   const [filters, setFilters] = useState('');

   useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
 
 const  formSubmitHandler = ({name, number, id}) => {     
    const contact = {
       name,
       number,
       id,
    }          
    setContacts(prevContacts =>([contact, ...prevContacts]))   
  };  
   
 const nameFilter = e => {
    setFilters(e.currentTarget.value);
  };
 
 const deleteContact = id => {
      setContacts(contacts.filter(contact => contact.id !== id)
      )};

    const normolizedFilter = filters.toLowerCase();
    const visibleContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(normolizedFilter),);
    const sameName = visibleContacts.map(contact => contact.name.toLowerCase())
      

  return (
    <Box
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 40,
      }}
    >
           <Tiltle>Phonebook</Tiltle> 
      <Forms  onSubmit={formSubmitHandler} contacts={sameName}/>   
           <Contacts>Contacts</Contacts>
      <Filter value={filters} onChange={nameFilter}/>     
      <Phonebook contacts={visibleContacts} onDeleteContact={deleteContact}/>
    </Box>
  );
};
// };

export default App;
