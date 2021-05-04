import React from 'react';
import ReactDOM from 'react-dom';
 
 
const App: React.FC = () => {
    return (
        <div>
　　　　　   Hello World
        </div>
    )
}
 
 
if (document.getElementById('app1')) {
    ReactDOM.render(<App />, document.getElementById('app1'));
}