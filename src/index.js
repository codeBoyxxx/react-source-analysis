import React from './react';
import ReactDOM from './react-dom';


// function App(params) {
//   return <div>hello world</div>
// }

// let element = React.createElement('h1',{
//   id:'title'
// },'hello','world')
// console.log('vdom',element);

let element = <div className='title' style={{background:'red'}}>hello world</div>
console.log('element元素',element)

ReactDOM.render(
  element,
  document.getElementById('root')
);
