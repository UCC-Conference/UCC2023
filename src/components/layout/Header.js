import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import getRoutes from "../../Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = getRoutes().map((route, i) => (
        <li key={i}>
            <NavLink to={route.href}>
                {route.title}
            </NavLink>
        </li>
    ));
    const menuItemsMobile = getRoutes().map((route, i) => (
        <li key={i}>
            <NavLink to={route.href} onClick={() => setMenuOpen(false)}>{route.title}</NavLink>
        </li>
    ));

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header${scrolled ? " header-sticky" : ""}`}>
            <Link to="/">
                <h1>UCC 2023</h1>
            </Link>
            <nav>
                <ul>{menuItems}</ul>
            </nav>
            <div className="menuMobile">
                <FontAwesomeIcon icon={faBars} />
                <Menu right isOpen={menuOpen}  onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)}>
                    {menuItemsMobile}
                </Menu>
            </div>
        </header>
    );
}

export default Header;
