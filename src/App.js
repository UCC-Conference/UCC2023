import React, { useEffect } from "react";
import { Route, Routes as BaseRoutes, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <script>
                    {`
                        var _Hasync= _Hasync|| [];
                        _Hasync.push(['Histats.start', '1,4767673,4,0,0,0,00010000']);
                        _Hasync.push(['Histats.fasi', '1']);
                        _Hasync.push(['Histats.track_hits', '']);
                        (function() {
                        var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
                        hs.src = ('//s10.histats.com/js15_as.js');
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
                        })();
                    `}
                </script>
            </Helmet>
        </>
    );
}

export default App;
