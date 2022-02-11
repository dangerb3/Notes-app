import React from "react";
// Пример создания компонента с помощью классов
// Устаревший подход

class ClassCounter extends React.Component {// Классовый компонент это устаревший подход

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);// Без этого не будут работать функции. Нужно забиндить контекст
        this.decrement = this.decrement.bind(this);// В методах класса контекст теряется.
    }

    increment() {
        this.setState({count: this.state.count + 1})
        }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render(){// в Классовых компонентах возврат jsx только через функцию render(), в отличие от функциональных.
        return (// Круглые скобки, а не фигурные, т.к. возвращаем не объект 
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>{/* Используем this при обращении к полям класса */}
            <button onClick={this.decrement}>Decrement</button>
        </div>
        )
    }
}

export default ClassCounter; // Все компоненты надо экспортировать