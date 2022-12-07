// 여러 상태들이 저장되어 있을 공간

import { createStore } from 'redux'
import reducer from './reducer/reducer'

//reducer 라는 매개변수를 사용
let store = createStore(reducer);


export default store;