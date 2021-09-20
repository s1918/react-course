import React from "react"
import TodoItem from "./TodoItem"
import data from "./data"

class MyApp extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: data 
        }
        this.HandleClick = this.HandleClick.bind(this)
    }

    HandleClick(id) {
        this.setState(prevState => {
            const newData = prevState.todos.map(item => {
                if (item.id === id) {
                    return {
                        ...item, 
                        completed: !item.completed
                    }
                }
                return item
            })
            return {
                todos: newData
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} onClick={this.HandleClick}/>)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default MyApp