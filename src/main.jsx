import App from "./App";
import * as ReactDOM from 'react-dom/client'
import * as React from 'react'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode> {/*car dvp*/}
        <BrowserRouter><App/></BrowserRouter>
    </React.StrictMode>
)