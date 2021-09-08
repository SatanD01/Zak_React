import React from "react";
import ReactDom from 'react-dom';

const  AppList = () => {
    return (
        <>

            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </>
    );
}

const  AppHeader = () => {
    return (
        <>
            <h1>Hello World!</h1>
        </>
    );
}

const App = () => {
    return (
        <>
            <AppHeader/>
            <AppList/>
        </>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));
