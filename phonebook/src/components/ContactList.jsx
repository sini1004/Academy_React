import React from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = ({itme}) => {
  const book = useSelector((state) => state.contactList);
  console.log(book)
  return (
    <div>
      <SearchBox />
      {book.map((item)=>(
        <ContactItem item={itme}/>
        // item={itme} : 바로 자식으로 보낼 때는 porps로
      ))}
    </div>
  )
}

export default ContactList