import './App.css';
import { Provider } from 'react-redux';
import AddTodo from './components/AddTodo';
import store from './redux/store';
import TodoList from './components/TodoList';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AddTodo/>
      <TodoList/>
    </div>
    </Provider>
  );
}

export default App;
