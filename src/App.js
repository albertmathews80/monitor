import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers";
// import "./App.scss";
function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;
