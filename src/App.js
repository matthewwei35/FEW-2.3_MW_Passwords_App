import './App.css';
import Password from './Password';
import PasswordList from './PasswordList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const PSSWRDZ_STATE = "PSSWRDZ_STATE";

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(PSSWRDZ_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(PSSWRDZ_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data:"+err)
  }
}

const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
        <PasswordList />
      </div>
    </Provider>
  );
}

export default App;
