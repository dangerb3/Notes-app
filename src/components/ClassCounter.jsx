import React from "react";
// Создание компонента с помощью классов

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);// В методах класса контекст теряется.
    }

    increment() {
        this.setState({count: this.state.count + 1})
        }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render(){
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>{/* Используем this при обращении к полям класса */}
            <button onClick={this.decrement}>Decrement</button>
        </div>
        )
    }
}

export default ClassCounter;
