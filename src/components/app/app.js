import React, {useState} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

  const [todoData, setTodoData] = useState([
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ])

  // const todoData = [
  //   { label: 'Drink Coffee', important: false, id: 1 },
  //   { label: 'Make Awesome App', important: true, id: 2 },
  //   { label: 'Have a lunch', important: false, id: 3 }
  // ];

  // const deleteItem = (id) => {
  //   setTodoData( (todoData) => {
  //     const idx = todoData.findIndex((el) => el.id === id)
  //     todoData.splice(idx, 1)
  //     return {
  //       todoData: todoData
  //     }
  //   })
  // }

  const deleteItem = (id) => {
    setTodoData(todoData.filter(el => el.id !== id))
    }

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData}
        onDeleted={ deleteItem} />
    </div>
  );
};

export default App;
