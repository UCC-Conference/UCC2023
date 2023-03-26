import React from "react";

const Content = (props) => {
    let className = "pageContent";
    className += props.className ? ` ${props.className}` : "";
    return (
        <div className={className}>
            { props.children }
        </div>
    );
};

export default Content;