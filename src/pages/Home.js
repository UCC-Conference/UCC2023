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
                    The IEEE/ACM International Conference on Utility and Cloud Computing (UCC) is a premier annual conference series aiming to provide a platform for researchers from both academia and industry to present new discoveries in the broad area of Cloud and Edge utility computing and applications.
                </p>
                <p>
                    Previous events were held in Shanghai, China  (Cloud 2009), Melbourne, Australia (Cloud 2010 & UCC 2011), Chennai, India (UCC 2010), Chicago, USA (UCC 2012), Dresden, Germany (UCC2013), London, UK (UCC 2014), Limassol, Cyprus (UCC 2015), Shanghai, China (UCC 2016), Austin, USA (UCC 2017), Zurich, Switzerland  (UCC 2018), Aucland, New Zealand (UCC 2019), Leicester, UK (UCC 2020), Leicester, UK (UCC 2021), and Vancouver, USA (UCC 2022). 
                </p>
                <p>
                    UCC 2023 will be held in conjunction with the 10th IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT 2023) in Taormina, Messina, Italy.
                </p>
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
