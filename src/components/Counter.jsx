import React, { useState } from 'react';
// Пример создания компонента с помощью функций
// Компонент всегда называется как файл и всегда с большой буквы

const Counter = function(){
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return(// возврат jsx напрямую без функции render()
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;  // Все компоненты надо экспортировать 

