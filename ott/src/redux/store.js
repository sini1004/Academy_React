import { legacy_createStore, applyMiddleware } from 'redux';
// createStore 가로줄 redux toolkit사용 유도
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import { composeWidthDevTools } from 'redux-devtools-extension'

let store = legacy_createStore(rootReducer, composeWidthDevTools (
  applyMiddleware(thunk)
));

export default store;