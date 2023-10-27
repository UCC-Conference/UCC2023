import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const Dates = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Important Dates</h1>
                <hr />
                <p><strong>Timezone</strong><br/>Anywhere in the world!</p>
                <p><del><strong>Workshop Proposals Due</strong><br/>June 14, 2023</del></p>
                <p><del><strong>Workshop Proposals - Notification of Acceptance</strong><br/>June 15, 2023</del></p>
                <p><del><strong>URL of Workshop</strong><br/>July 7, 2023</del></p>
                <p><del><strong>Conference Paper Submissions Due</strong><br/>September 17, 2023</del></p>
                <p><strong>Conference Paper - Notification of Acceptance</strong><br/>October 21, 2023</p>
                <p><strong>Camera-Ready Due</strong><br/>November 2, 2023</p>
                <p><strong>Early Registration</strong><br/>November 7, 2023</p>
            </Content>
        </PageWrapper>
    );
};

export default Dates;
