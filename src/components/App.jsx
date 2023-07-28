import React, {useState, useEffect} from 'react';
import { Box } from '../components/Box';
import { Tiltle, Contacts} from './App.styled';
import Phonebook from 'components/Phonebook/Phonebook'
import Forms from 'components/Form/Form';
import Filter from './Filter/Filter';
// import basicContacts from '../../src/basicContacts';


const App = () => {
   const [contacts, setContacts] = useState([]);
   const [filters, setFilters] = useState('');
//  state = {
//   contacts: [],
//   filter: '',
//   };   
 
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
     setContacts(prevContacts => prevContacts !== id)
  };

  useEffect(() => { 
    const contacts = localStorage.getItem('contacts');
      console.log("useEffect  contacts:", contacts)
     setContacts( JSON.parse(contacts));
    
  }, []);

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
   
    }, [contacts]);

// componentDidMount() {
  // const contacts = localStorage.getItem('contacts');
  // const parsedContacts = JSON.parse(contacts);

  // if (parsedContacts) {
  //   this.setState({contacts: parsedContacts});
  // }
// }

//   componentDidUpdate(prevProps, prevState) {
    // console.log('update')
    // if (this.state.contacts !== prevState.contacts) {
    //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    // }
//   }

  // render () {
    // const  {filter, contacts} = this.state;
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
