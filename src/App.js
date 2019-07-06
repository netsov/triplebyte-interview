import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import Columns from './components/Columns';

const App = () => (
  <Provider store={store}>
    <Columns />
  </Provider>
);

export default App;
