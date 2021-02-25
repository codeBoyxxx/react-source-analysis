
import { REACT_TEXT } from "./constants";
/**
 * render 函数将虚拟dom对象变成真实dom,并挂载到页面上
 * @param {*} vdom 
 * @param {*} container 
 */
function render(vdom,container) {
    mount(vdom,container)    
}
function mount(vdom,container) {
    if(!vdom) return;
    const dom = createDOM(vdom)
    container.appendChild(dom)
}


/**
 * 将vdom转化为真实的dom
 * @param {} vdom 
 */
function createDOM(vdom) {
    let { type,props } = vdom;
    let dom;
    if(type===REACT_TEXT){
        dom = document.createTextNode(props.content)
    }else{
        dom=document.createElement(type);
    }

    if(props){
        updateProps(dom,{},props); // 更新属性
        // 如果只有一个子元素，并且这个子元素是文本
        if(typeof props.children === 'object' && props.children.type){
            render(props.children,dom)
        } else if(Array.isArray(props.children)){//如果子元素是数组
            reconciileChildren(props.children,dom)
        }
    }

    return dom;
    
}

/**
 * 更新属性
 * @param {*} dom 
 * @param {*} oldProps 
 * @param {*} newProps 
 */
function updateProps(dom,oldProps ={} ,newProps ={}) {
    
}

function reconciileChildren(childrenVdom,parentDOM) {
    childrenVdom.forEach(childVdom => {
        render(childVdom,parentDOM)
    });
}

const ReactDOM = {render}

export default ReactDOM;

