import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import ScrollToTop from "./components/elements/ScrollToTop";

import "./index.css";
import App from "./App";

const subpath = "/UCC2023";
const history = createBrowserHistory({ basename: subpath});
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <BrowserRouter history={history} basename={subpath}>
        <ScrollToTop history={history} />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
