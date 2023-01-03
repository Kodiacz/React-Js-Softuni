let rootElement = document.getElementById('root');

//Traditional way of createing a React Element:
let tradinitionalReactElement = React.createElement(
    'header', 
    { className: 'site-header'}, 
    React.createElement('h1', { id: 'main-heading' }, 'hello React'),
    React.createElement('h1', { id: 'main-heading' }, 'hello React'),);

let jsxReactElement = <header>
    <h1>Hello from JSX</h1>
    <h2>The best framework in the world!</h2>
</header>;
    
ReactDOM.render(tradinitionalReactElement, rootElement);
ReactDOM.render(jsxReactElement, rootElement);