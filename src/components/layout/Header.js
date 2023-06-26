import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import getRoutes from "../../Routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const routes = {};
    getRoutes().forEach((route) => {
        if(route.menu) {
            if (route.parent)
                if ([route.parent] in routes && "children" in routes[route.parent]) routes[route.parent]["children"].push(route);
                else routes[route.parent] = { parent: route.parent, level: 1, children: [route] };
            else routes[route.href] = { level: 0, route };
        }
    });
    const menuItems = Object.values(routes).map((item, i) => (
        <li key={i}>
            {item.level ? (
                <div className="dropdown">
                    <a
                        href="/#"
                        onClick={(e) => {
                            e.preventDefault();
                        }}>
                        <span>{item.parent}</span>
                        <span class="arrow-down" />
                    </a>
                    <div className="dropdown-menu">
                        <span class="arrow-up" />
                        {item.children.map((link, j) => (
                            <NavLink key={"a" + j} to={link.href} target={link.external ? "_blank" : null}>
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            ) : (
                <NavLink key={i} to={item.route.href} target={item.route.external ? "_blank" : null}>
                    {item.route.title}
                </NavLink>
            )}
        </li>
    ));
    const menuItemsMobile = Object.values(routes).map((item, i) => (
        <li key={i}>
            {item.level ? (
                <div className="dropdown">
                    <a
                        href="/#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (e.target.parentNode.parentNode.classList.contains("active")) e.target.parentNode.parentNode.classList.remove("active");
                            else e.target.parentNode.parentNode.classList.add("active");
                        }}>
                        <span class="arrow" />
                        <span>{item.parent}</span>
                    </a>
                    <div className="dropdown-menu">
                        {item.children.map((link, j) => (
                            <NavLink key={"a" + j} to={link.href} target={link.external ? "_blank" : null}>
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            ) : (
                <NavLink to={item.route.href} onClick={() => setMenuOpen(false)} target={item.route.external ? "_blank" : null}>
                    {item.route.title}
                </NavLink>
            )}
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
