import React from "react";
import BigHeader from "../components/elements/BigHeader";
import Content from "../components/elements/Content";
import Countdown from "react-countdown";
import Prefooter from "../components/elements/Prefooter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const counter = ({ days, hours, minutes, seconds, completed }) => {
    return (
        <div className="countdown">
            <div>
                <span>Days</span>
                <span>{days}</span>
            </div>
            <div>
                <span>Hours</span>
                <span>{hours}</span>
            </div>
            <div>
                <span>Minutes</span>
                <span>{minutes}</span>
            </div>
            <div>
                <span>Seconds</span>
                <span>{seconds}</span>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div>
            <BigHeader />
            <Content>
                <center>
                    <h1>About UCC</h1>
                </center>
                <p>
                    Cloud computing has firmly established itself as an indispensable utility for the digital age. Cloud services consumers expect and rely on sufficient computing power, the availability of data and media, and that these will be
                    accessible across a range of devices.
                </p>
                <p>
                    The expectation now is that Cloud services providers are capable of maintaining streamed services that are always available. Also, social and technological challenges are met with the development and adoption of new technologies
                    that provide a safer, more secure, and richer digital experience for users and customers. Therefore, it is essential that sound scientific principles underpinning cloud technology and its economic value to both service providers
                    and consumers are expressed and understood.
                </p>
                <p>UCC 2023 is the premier IEEE/ACM conference for areas related to Cloud Computing as a Utility and provides an international forum for leading researchers and practitioners in this important and growing field.</p>
                <p>
                    This will be the 16th UCC in a successful conference series of community-driven events. Previous events were held in Shanghai, China (Cloud 2009), Melbourne, Australia (Cloud 2010 & UCC 2011), Chennai, India (UCC 2010), Chicago,
                    USA (UCC 2012), Dresden, Germany (UCC2013), London, UK (UCC 2014), Limassol, Cyprus (UCC 2015), Shanghai, China (UCC 2016), Austin, Texas, USA (UCC 2017), Technopark Zurich, Switzerland (UCC 2018), Aucland, New Zealand (UCC 2019),
                    Leicester, UK (UCC 2020), Leicester, UK (UCC 2021), and Vancouver, USA (UCC 2022).
                </p>
                <p>UCC 2023 is co-located with BDCAT 2023 and offers a technical programme, workshops, tutorials, doctoral symposium, and cloud challenge.</p>
            </Content>
            <Content className="center">
                <div className="date">
                    <h2>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>4-7 December 2023</span>
                    </h2>
                </div>
                <Countdown date={new Date("2023-12-04")} renderer={counter} />
            </Content>
            <Prefooter />
        </div>
    );
};

export default Home;
