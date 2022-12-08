import React from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  const book = useSelector((state) => state.contactList);
  console.log(book)
  return (
    <div>
      <SearchBox />
      <ContactItem />
      <ContactItem />
    </div>
  )
}

export default ContactList