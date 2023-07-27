import PropTypes from 'prop-types';
import React, {useState} from 'react';
import  {Form, TypeName, InputName, TypePhone, InputPhone, AddButton} from './Form.styled';
import {nanoid} from 'nanoid'; 


const Forms = ({contacts, onSubmit}) => {

   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

 const handelChange = e => {
   const {name, value} = e.currentTarget

  switch(name) {
    case 'name':
      setName(value); 
      break;    

    case 'number':
       setNumber(value);
       break; 
      
    default:
       return;
  }
 };

 const alertMessage =  e => {
   const normolizedName = name.toLowerCase();
   const repit = contacts.includes(normolizedName)
     
   if (repit === true){
    alert(name + ' is already in contacts');
      e.preventDefault();
      //  reset ()
      }
        else {return};
    }

const handelSubmit = e => {
       e.preventDefault();
    
       onSubmit(Object.assign({id:nanoid()}))
    
       this.reset ();
     }; 
//  const reset = () => {
//   setName('');
//   setNumber('');
//  };

   const nameId = nanoid();
   const numberId = nanoid();

    return (
          <Form onSubmit={handelSubmit}>
               <TypeName htmlFor={nameId}>Name</TypeName>
               <InputName id={nameId}
                   type="text"
                   name="name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                   value={name}
                   onChange={handelChange}
                   />
               <TypePhone htmlFor={numberId}>Number</TypePhone>    
               <InputPhone id={numberId}
                   type="tel"
                   name="number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
                   value={number}
                   onChange={handelChange}
                   />
                <AddButton type="submit" onClick={alertMessage}>Add contact</AddButton>  
            </Form> 
    )}

Forms.propTypes = {     
  contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
  onSubmit: PropTypes.func.isRequired,
};

export default Forms;