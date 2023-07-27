import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '../Box';
import  {ContactBox, ContactList, ContactItem, ContactName, DeleteButton, Point} from './Phonebook.styled';

const phonebook = ({contacts, onDeleteContact}) => {

         return (
            <Box>
             <ContactBox>
                <ContactList > 
                    {contacts.map(contact => (          
                        <ContactItem key={contact.id} >
                          <Point></Point>
                            <ContactName>{contact.name}: {contact.number}</ContactName>
                          <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton> 
                        </ContactItem>
                      ))}
                </ContactList>
             </ContactBox> 
            </Box>      
    )};

    phonebook.propTypes = {
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })
      ),
      onDeleteContact: PropTypes.func.isRequired,
  };
  
export default phonebook;