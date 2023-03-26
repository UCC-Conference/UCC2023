import React from "react";

const PageWrapper = (props) => {
    return (
        <>
            <div className="header-bg" />
            {props.children}
        </>
    );
};

export default PageWrapper;
