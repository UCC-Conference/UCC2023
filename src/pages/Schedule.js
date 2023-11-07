import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

import schedule from "../assets/schedule.png";

const Schedule = () => {
  return (
    <PageWrapper>
      <Content>
        <h1>Schedule (draft)</h1>
        <hr />
        <p>The program shown is a draft and may be subject to change.</p>
        <ul>
          <li>
            <b>Workshop Presentation</b>: 15 minutes of presentation and 5
            minutes Q/A
          </li>
          <li>
            <b>Conference Presentation (full)</b>: 20 minutes of presentation
            and 10 minutes Q/A
          </li>
          <li>
            <b>Conference Presentation (short)</b>: 15 minutes of presentation
            and 5 minutes Q/A
          </li>
          <li>
            <b>Poster Session</b>: on-demand during breaks
          </li>
        </ul>
      </Content>
      <div className="fullImg">
        <img
          src={schedule}
          alt="Schedule"
        />
      </div>
    </PageWrapper>
  );
};

export default Schedule;
