// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Header";



function App() {


    return (
        <>
            <Header />
        </>
    );
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);