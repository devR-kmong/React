import './App.css';
import { Component } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        { id: 1, text: '공부하기', checked: false },
        { id: 2, text: '청소하기', checked: false },
        { id: 3, text: '요리하기', checked: false }
      ]
    }
  }

  onInsert = (text) => {
    const { todoList } = this.state
    const todoObj = { id: todoList.length + 1, text: text, checked: false }
    const concatedList = todoList.concat(todoObj)
    this.setState({
      todoList: concatedList
    })
  }

  deleteTodo = (id) => {
    const { todoList } = this.state
    const filteredList = todoList.filter(
      (data) => (data.id !== id)
    )
    this.setState({
      todoList: filteredList
    })
  }

  updateTodo = (id, text) => {
    const { todoList } = this.state
    const todoObj = { id: id, text: text, checked: false }
    const updatedList = todoList.map(
      (data) => (data.id === id)? ({...todoObj}) : (data)
    )
    this.setState({
      todoList: updatedList
    })
  }

  render() {
    const {todoList} = this.state
    
    return (
      <div className="App">
        <h1 className="App-title">오늘의 할 일</h1>
        <div className="container">
          <TodoInsert onInsert={this.onInsert} />
          <TodoList 
            todoList={todoList}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}
          />
        </div>
      </div>
    )
  }
}


export default App;
