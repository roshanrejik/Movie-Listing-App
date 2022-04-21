import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import { Provider} from 'react-redux';
const store = configureStore()
store.subscribe(()=>{
  console.log(store.getState());
})
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')

);

