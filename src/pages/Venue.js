import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function importAll(r) {
	let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}


const images = importAll(require.context('../assets/photos', false, /\.(JPG|png|jpe?g|svg)$/));
const imagesThumb = Object.values(importAll(require.context('../assets/photos/thumbnails', false, /\.(JPG|png|jpe?g|svg)$/)));

const imageList = Object.values(images).map(((img, i) => {
    return {original: img, thumbnail: imagesThumb[i] }
}))

const Venue = () => {    
   // const imagesList = images.map((x) => x));
    return (
        <PageWrapper>
            <Content>
                <h1>Venue and Useful Links</h1>
                <hr />
                <p>UCC 2023 will be held at the <Link to="http://hotelvilladiodoro.com/">Hotel Villa Diodoro, Taormina</Link>.</p>
                <h1>Useful Links</h1>
                <ul>
                    <li><Link to="http://www.taormina.it/introduction/map">How to reach Taormina</Link></li>
                    <li><Link to="https://www.interbus.it/travel-plan/solution.php?departure_stations=35&arrival_stations=92&departure_date=24/03/2023&arrival_date=&pax=1,undefined,undefined&t=0&keyword=TPL_NEW_HOME#dettaglio_fermate_a">Bus Service</Link></li>

                    <li><Link to="http://www.comune.taormina.me.it/">Comune di Taormina (City Hall Website)</Link></li>

                    <li><Link to="http://www.taormina.it/">Taormina's suggestions (map, how to get there, transportation, ...)</Link></li>

                    <li><Link to="https://www.thethinkingtraveller.com/italy/sicily/towns-and-cities-in-sicily/taormina">Travel to Taormina</Link></li>
                    <li><Link to="http://www.aeroporto.catania.it/?lang=eng">Catania Airport</Link></li>

                </ul>
            <ImageGallery items={imageList} />
            </Content>
        </PageWrapper>
    );
};

export default Venue;
