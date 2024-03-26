import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/UCC-2023.png';

function BigHeader(props) {
    return (
        <>
            <div className="bigHeader">
                <div>
                    <h2><FontAwesomeIcon icon={faLocationArrow} /><span>Taormina (Messina), Italy</span></h2>
                    <h2><FontAwesomeIcon icon={faCalendarAlt} /><span>4-7 December 2023</span></h2>
                </div>
                <div className="right">
                    <img src={logo} alt="UCC 2023 Logo" />
                    <h1>The 16th IEEE/ACM International Conference on Utility and Cloud Computing (UCC 2023)</h1>
                    <Link to="https://ucc-conference.github.io/BDCAT2023"><h2>Co-located conference: BDCAT 2023</h2></Link>
                </div>
            </div>
        </>
    );
}

export default BigHeader;
