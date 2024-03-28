// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";




const App = () => {
    return (
        <BrowserRouter>
            <Routes>


                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                        </>
                    }
                />

                <Route
                    path="/About"
                    element={

                        <About />
                    }
                />

                <Route
                    path="/Contact"
                    element={
                        <>

                            <Contact />

                        </>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
};
var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);