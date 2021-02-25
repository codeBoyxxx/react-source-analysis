import React from './react';
import ReactDOM from './react-dom';


function App(props) {
  return <div>{props.name} {props.children}</div>
}


let element = <App name='hello'>meng</App>
console.log(element,element)

ReactDOM.render(
  element,
  document.getElementById('root')
);
