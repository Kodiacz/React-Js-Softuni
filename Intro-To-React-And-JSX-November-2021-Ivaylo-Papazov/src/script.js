let rootElement = document.getElementById('root');

//Traditional way of createing a React Element:
let reactElement = React.createElement(
    'header', 
    { className: 'site-header'}, 
    React.createElement('h1', { id: 'main-heading' }, 'hello React'),
    React.createElement('h1', { id: 'main-heading' }, 'hello React'),);

ReactDOM.render(reactElement, rootElement);