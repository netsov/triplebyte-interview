import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import Columns from './components/Columns';

const App = () => (
  <main className="">
    <Provider store={store}>
      <Columns />
    </Provider>
  </main>
);

export default App;
