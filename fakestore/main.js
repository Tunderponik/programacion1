import React from 'react';
import ReactDOM from 'react-dom';
import app from './app';

ReactDOM.render(
    <app/>
    ,document.getElementById('root')
);

const app=()=>{
    return(
        <>
        <h2>Fake API Store</h2>
        </>
    )
}

export default app;