// search 적용
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  // search 할 때 쓰이는 keyword값도 받아옴
  const { contactList, keyword } = useSelector((state) => state);
  // const book = useSelector((state) => state.contactList);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    if(keyword !== ''){ // 키워드가 (서치에서) 입력이 되었을 때
      let book = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(book);
    } else {
      setFilteredList(contactList);
    }
  },[keyword, contactList]);
  
  return (
    <div>
      <SearchBox />
      <div>
        인원 : {filteredList.length}명
        {filteredList.map((item)=>(
          <ContactItem item={item}/>
          // item={item} : 바로 자식으로 보낼 때는 porps로
        ))}
      </div>
    </div>
  );
};

export default ContactList