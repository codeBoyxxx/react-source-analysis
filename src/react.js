
import { wrapToVdom } from "./utils";

/**
 * createElement 方法返回一个虚拟DOM对象
 * @param {*} type 原生标签或者组件
 * @param {*} config 属性
 * @param {*} children 子元素
 */
function createElement(type,config,children) {
    if(config) {
        delete config._owner;
        delete config._store;
        delete config.__self;
        delete config.__sou
    }
    let props = {...config}
    if(arguments.length>3){
        props.children = Array.prototype.slice.call(arguments,2).map(wrapToVdom)
    } else {
        props.children = wrapToVdom(children)
    }
    return {
        type,
        props
    }
}

const React = {
    createElement
}

export default React;