
let initialState = {contactList:[]}; // 초기값으로 contactList이름의 빈 배열

function reducer (state=initialState, action){
  let {type, payload} = action; // action 재분해 이용
  switch (type) {
    case 'ADD_CONTACT':
      return {
        ...state, contactList : [
          ...state.contactList, 
          {
            name:payload.name, 
            phoneNumber:payload.phoneNumber
          }
        ]
      };
    default: 
      return {...state}
  }
}

export default reducer