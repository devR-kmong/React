import '../css/Todo.css'
import { Component } from 'react';
import 'remixicon/fonts/remixicon.css'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text,
            edit: false
        }
    }

    deleteTodo = () => {
        const { id } = this.props
        this.props.deleteTodo(id)
    }

    updateTodo = () => {
        const { id } = this.props
        const { text, edit } = this.state
        if (edit === true) {
            this.props.updateTodo(id, text)
        }
        this.setState({
            edit: !edit
        })
    }

    textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    
    render() {
        const { id, text } = this.props
        const { edit } = this.state

        if (edit === false) {
            return (
                <div className="Todo">
                    <span>{id}. {text}</span>
                    <div className="TodoBtn-wrapper">
                        <div className="editBtn" title="수정" onClick={this.updateTodo}><i class="ri-pencil-line"></i></div>
                        <div className="delBtn" title="삭제" onClick={this.deleteTodo}><i class="ri-close-line"></i></div>
                    </div>
                </div>
            )
        }
        else if (edit === true) {
            return (
                <div className="Todo">
                    <span>{id}. <input type="text" defaultValue={text} onChange={this.textChange} /></span>
                    <div className="TodoBtn-wrapper">
                        <div className="editBtn" title="수정완료" onClick={this.updateTodo}><i class="ri-check-line"></i></div>
                        <div className="delBtn" title="취소" onClick={this.deleteTodo}><i class="ri-close-line"></i></div>
                    </div>
                </div>
            )
        }
    }
}


export default Todo;
