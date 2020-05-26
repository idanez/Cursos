//import Rect from 'react'
//Como é javascript puro, nao tem tags, nao precisa do import acima

export default props => {
    if(props.test) {
        return props.children;
    } else {
        return false;
    }
}