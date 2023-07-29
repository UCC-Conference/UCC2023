import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import { Link } from "react-router-dom";
import Pdf from "../assets/documents/PhDSymposium/cfds-ucc.pdf";
import Txt from "../assets/documents/PhDSymposium/cfds-ucc.txt";

const PhDSymposium = () => {
  return (
    <PageWrapper>
      <Content>
        <h1>Doctoral Symposium</h1>
        <hr />
        <p>
            [<a href={Pdf} target="_blank" rel="noreferrer">PDF</a>] - [<a href={Txt} target="_blank" rel="noreferrer">Txt</a>]
        </p>

        <p>
        Welcome to the Doctoral Symposium of the 16th IEEE/ACM International Conference on Utility and Cloud Computing (UCC). The Doctoral Symposium is a forum for PhD students to present their work and receive feedback and guidance. The aim is to provide a space for PhD students to meet and interact with peers, and to receive constructive feedback about their work from experts in the field of cloud computing.  
        </p>

        <p>
        UCC 2023 will be hosted at Taormina (Italy) by the University of Messina. Taormina is the most touristic city in Sicily.
        </p>

        <p>
        The program will feature technical presentations by PhD students, general research advice, and discussions in panel and open formats.
        </p>

        <p>
        We invite submissions from PhD students at any stage of their doctoral studies. Submission is open to all areas of Cloud and Utility Computing as per the UCC main track call for papers. Submissions should follow the following structure:
        </p>

        <ul>
          <li>Abstract</li>
          <li>Background</li>
          <li>Problem Statement</li>
          <li>Related Work</li>
          <li>Overview of Proposed Work</li>
          <li>Preliminary Results (if any)</li>
          <li>Planned Work</li>
        </ul>

        <p>
        Submissions should be no longer than two (2) single-spaced double-column pages using 10-point size font on 8.5x11 inch pages (ACM conference style), including figures, tables and references.
        </p>

        <p>
          Manuscripts are submitted via the Microsoft CMT Conference Management System: 
          <br />
          <Link to="https://cmt3.research.microsoft.com/UCCBDCAT2023">
            https://cmt3.research.microsoft.com/UCCBDCAT2023
          </Link>
        </p>

        <p>
        All manuscripts will be reviewed and judged on correctness, originality, technical strength, rigor in analysis, quality of results, quality of presentation, and interest and relevance to the conference attendees. The accepted papers will be published on the UCC websites.
        </p>

        <p>During all days of the conference, group and/or face-to-face mentorship sessions will be organized with academic and industrial researchers</p>

        <h2>Important Dates</h2>
        <p>
            <strong>Timezone</strong>: Anyware in the world!
            <br />
            <strong>Submission Due Date</strong>: October 15, 2023
            <br />
            <strong>Notification of Acceptance</strong>: October 25, 2023
            <br />
            <strong>Camera-ready Due Date</strong>: October 31, 2023
        </p>

        <h2>Info</h2>
        <p>
          Francesco Martella - <a href="mailto:fmartella@unime.it">fmartella@unime.it</a><br/>
          Amelie Chi Zhou - <a href="mailto:chi.zhou@szu.edu.cn">chi.zhou@szu.edu.cn</a>
        </p>
      </Content>
    </PageWrapper>
  );
};

export default PhDSymposium;
