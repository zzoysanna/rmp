import React from "react";
import ReactDOM from "react-dom";

console.log('JS works!');

class WelcomeTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3>Hello, {this.props.name}!</h3>;
    }
}

class Line extends React.PureComponent {
    render() {
        return React.createElement(
            'hr', {className: 'blue-line'}
        );
    }
}

ReactDOM.render(
    <>
        <WelcomeTitle name='Visitor'/>
        <Line />
        <p>nice to meet you 1111111</p>
    </>,
    document.getElementById('root')
);
