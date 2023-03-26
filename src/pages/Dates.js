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
                <p><strong>Paper Submissions Due</strong><br/>August 13, 2023</p>

                <p><strong>Acceptance Notification</strong><br/>October 9, 2023</p>

                <p><strong>Camera Ready Papers Due</strong><br/>October 31, 2023</p>
            </Content>
        </PageWrapper>
    );
};

export default Dates;
