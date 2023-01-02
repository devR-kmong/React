import '../css/TodoInsert.css'
import { Component } from 'react';
import 'remixicon/fonts/remixicon.css'

class TodoInsert extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    
    onInsert = () => {
        const { text } = this.state
        this.props.onInsert(text);
    }

    render() {
        return (
            <div className="Insert">
                <div className="input-wrapper">
                    <input type="text" class="todo-input" placeholder="할 일을 입력하세요." onChange={this.textChange} />
                    <button class="addBtn" onClick={this.onInsert}><i class="ri-add-line"></i></button>
                </div>
            </div>
        )
    }
}


export default TodoInsert;
