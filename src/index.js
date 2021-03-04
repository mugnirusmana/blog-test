import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'
import { PersistGate } from 'redux-persist/integration/react';
import { rootReducer } from './config';
import createEncryptor from 'redux-persist-transform-encrypt';

const encryptor = createEncryptor({
  secretKey: 'partners',
  onError: function(error) {
    console.log(`Error Encryption : ` + error);
  }
})

const persistConfig = {
  key: 'primary',
  storage: storage,
  whitelist: [],
  transform: [encryptor]
}

let persistReducer = persistCombineReducers(persistConfig, rootReducer);

let store;
let persistor;
let dev;

if(process.env.REACT_APP_MODE === 'LOCAL') {
  store = createStore(
    persistReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
} else {
  store = createStore(
    persistReducer,
    applyMiddleware(thunk),
  );
}

persistor = persistStore(store);

const render = <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    {dev}
    <App />
  </PersistGate>
</Provider>;

ReactDOM.render(render, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
