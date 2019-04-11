// Import the Reace and the ReractDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText () {
    return 'Click on me!';
}


// Creating a react component
const App = function () {

    return (
        <div>
            <label className="label" for="name">
                Enter Name:
            </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {getButtonText()}
            </button>
        </div>
    );
};

// Take the reace component and show it on the screen
ReactDOM .render(
    <App />,
    document.querySelector('#root')
);