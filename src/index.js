import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Альтернатива JSX. Но код получается громоздкий, поэтому лучше JSX
// ReactDOM.render(
//   React.createElement('button', {
//       disabled:false, onClick: ()=> console.log('click')
//   }, 'test'),
//   document.getElementById('root')
// );

ReactDOM.render(
    <App />,
      document.getElementById('root')
)

