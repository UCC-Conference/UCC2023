import React, { useEffect } from "react";
import { Route, Routes as BaseRoutes, useLocation, useNavigate } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import getRoutes from "./Routes";

import "./App.css";

function App() {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    useEffect(() => {
        if (search.includes('?/')) {
          navigate(`${pathname}${search.replace('?/', '')}`);
        }
      }, [navigate, pathname, search]);

    let routes = getRoutes();
    return (
        <>
            <Header />
            <main>
                <BaseRoutes>
                    {routes.map((route, i) => (
                        <Route exact path={route.href} element={route.component} key={i} />
                    ))}
                </BaseRoutes>
            </main>
            <Footer />
        </>
    );
}

export default App;
