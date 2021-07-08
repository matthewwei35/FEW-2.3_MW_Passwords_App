import './App.css';
import Password from './Password';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
      </div>
    </Provider>
  );
}

export default App;
