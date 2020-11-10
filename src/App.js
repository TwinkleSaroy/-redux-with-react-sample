import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import BookContainer from './components/BookContainer';
import store from './redux/Store';
import HookBookContainer from './components/HookBookContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BookContainer/>
      <HookBookContainer/>
    </div>
    </Provider>
  );
}

export default App;
