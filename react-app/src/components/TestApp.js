import React from 'react'


class testApp extends React.Component {
    constructor() {
        super()
        this.state = {
            count : 0,
            name : 'None'
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
                name: prevState.name = 'sayod'
            }
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <p>{this.state.name}</p>
                <button onClick = {this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default testApp