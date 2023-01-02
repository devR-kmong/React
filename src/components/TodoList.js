import '../css/TodoList.css'
import { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    deleteTodo = (id) => {
        this.props.deleteTodo(id)
    }

    updateTodo = (id, text) => {
        this.props.updateTodo(id, text)
    }

    render() {
        const { todoList } = this.props
        const result = todoList.map(
            (data, index) => (<Todo
                key={index}
                id={data.id}
                text={data.text}
                deleteTodo={this.deleteTodo}
                updateTodo={this.updateTodo}
            />)
        )

        return (
            <div className="List">
                {result}
            </div>
        )
    }
}


export default TodoList;
