import React from "react";
import { Link } from "react-router-dom";

function BigHeader(props) {
    return (
        <>
            <div className="prefooter">
                <div>
                    <h1>Taormina (Messina), Italy</h1>
                    <Link to="venue">View more</Link>
                </div>
            </div>
        </>
    );
}

export default BigHeader;
