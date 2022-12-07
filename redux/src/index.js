import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* sotre을 사용할 수 있게 만들어 줌 */}
    <Provider store={sotre}>
      <App />
    </Provider>
  </>
);
