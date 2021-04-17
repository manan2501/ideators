import React from 'react';
import { Provider} from 'react-redux';
import { store } from './redux/store';
import MainComponent from './MainComponent';


const App = () => {

  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
