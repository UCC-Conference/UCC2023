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
                <p><strong>Paper Submissions Due</strong><br/>August 3, 2023</p>

                <p><strong>Acceptance Notification</strong><br/>September 30, 2023</p>

                <p><strong>Camera Ready Papers Due</strong><br/>October 21, 2023</p>
            </Content>
        </PageWrapper>
    );
};

export default Dates;
