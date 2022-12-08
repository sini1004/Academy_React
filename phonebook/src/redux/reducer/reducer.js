
let initialState = {contactList:[]}; // 초기값으로 contactList이름의 빈 배열

function reducer (state=initialState, action){
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state, contactList : [
          ...state.contactList, 
          {name:action.payload.name, phoneNumber:action.payload.phoneNumber}
        ]
      };
    default: 
      return {...state}
  }
}

export default reducer