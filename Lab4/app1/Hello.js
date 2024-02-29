'use strict';

class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {personName:'world'};
    }

    render(){
        return React.createElement('h1',null, 'Hello, ' + this.state.personName);
    }
}

const domContainer = document.querySelector("#app");
ReactDom.Render(React.createElement(Hello), domContainer);