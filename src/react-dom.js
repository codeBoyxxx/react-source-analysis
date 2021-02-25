
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
    }else if(typeof type === 'function'){
        return mountFunctionComponent(vdom)
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

function mountFunctionComponent(vdom) {
    const { type, props } = vdom
    const renderVdom = type(props)
    vdom.oldRenderVdom = renderVdom
    return createDOM(renderVdom)
}

/**
 * 更新属性
 * @param {*} dom 
 * @param {*} oldProps 
 * @param {*} newProps 
 */
function updateProps(dom,oldProps ={} ,newProps ={}) {
    for(let key in newProps){
        if(key === 'children') {continue}
        if(key === 'style'){ // 更新样式
            let style = newProps[key]
            for(let attr in style){
                dom.style[attr] = style[attr]
            }
        }else{
            dom[key] = newProps[key]
        }
    }
    if(oldProps){
        for(let key in oldProps){
            if(!newProps.hasOwnProperty(key)){
                dom[key] = ''
            }
        }
    }
}

function reconciileChildren(childrenVdom,parentDOM) {
    childrenVdom.forEach(childVdom => {
        render(childVdom,parentDOM)
    });
}

const ReactDOM = {render}

export default ReactDOM;

