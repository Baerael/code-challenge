import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UrlShortener from './components/UrlShortener';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UrlShortener />
      </div>
    </Provider>
  );
}

export default App;
