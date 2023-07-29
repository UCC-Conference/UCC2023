import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const KeanoteSpeakers = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Keynote Speakers</h1>
                <hr/>
                
                <div className="keynote-block">
                    <h2>Fakhri Karray</h2>
                    <h3>University of Waterloo, Canada</h3>
                    <p>Talk: TBA</p>
                </div>

                <div className="keynote-block">
                    <h2>Frank Karlitschek</h2>
                    <h3>NextCloud CEO, Germany </h3>
                    <p>Talk: TBA</p>
                </div>
            </Content>
        </PageWrapper>
    );
};

export default KeanoteSpeakers;
