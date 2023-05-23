import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2023 UCC 2023 - Powered by <Link to="https://fcrlab.unime.it">FCRLab</Link></p>
            <p><Link to="/privacy-policy">Privacy policy</Link></p>
            <p>Photos by <Link to="https://www.flickr.com/photos/delunaernesto/albums/72157622232989240">Ernesto De Luna</Link></p>
        </footer>
    );
};

export default Footer;