import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from "redux";
import expenseManager from "./State/reducers";
import {Provider} from 'react-redux';

import persistState from "./utils/storage-manager/persist-state";
import extractStorage from "./utils/storage-manager/extract-storage";

import App from './App/App';

import './index.css';

const persistedStorage = extractStorage();

const store = createStore(expenseManager, persistedStorage);

store.subscribe(() => {
  persistState(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);