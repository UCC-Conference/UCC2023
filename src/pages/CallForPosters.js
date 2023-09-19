import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import { Link } from "react-router-dom";
import CfpPdf from "../assets/documents/CallForPosters/Call_for_Posters_20230918.pdf";
import CfpTxt from "../assets/documents/CallForPosters/Call_for_posters_20230918txt";

const CallForPosters = () => {
  return (
    <PageWrapper>
      <Content>
        <h1>Call for Posters</h1>
        <hr />
        <p>
            [<a href={CfpPdf} target="_blank" rel="noreferrer">PDF</a>] - [<a href={CfpTxt} target="_blank" rel="noreferrer">Txt</a>]
        </p>
        <h2>Submissions</h2>
        <p>
          Authors are invited to submit posters electronically through the
          following link:
          <br />
          <Link to="https://cmt3.research.microsoft.com/UCCBDCAT2023">
            https://cmt3.research.microsoft.com/UCCBDCAT2023
          </Link>
        </p>
        <h2>Call for Posters</h2>
        <p>
          This call for papers applies to posters with accompanying two (2)
          ACM-formatted double-column pages short papers for the main UCC or
          BDCAT conferences. Authors are invited to submit a short two-page
          writeup covering original work-in-progress (WIP) or ongoing research
          suitable for presentation at the conference venue in poster form.
        </p>

        <h2>Important Dates</h2>
        <p>
            <strong>Timezone</strong>: Anyware in the world!
            <br />
            <strong>Poster submission due</strong>: 17 October 2023
            <br />
            <strong>Notification of Acceptance</strong>: 21 October 2023
            <br />
            <strong>Camera-ready papars due</strong>: 31 October 2023
            <br />
            <strong>Early + author registration deadline</strong>: 31 October 2023
            <br />
            <strong>Poster session at the conference</strong>: TBD
        </p>

        <h2>Topic of interest</h2>
        <p>
          Topics of interest include but are not limited to those covered in the
          UCC or BDCAT conferences, such as:
        </p>

        <ul>
          <li>Artificial intelligence</li>
          <li>Cloud computing and application architectures</li>
          <li>
            Cloud technologies including virtual machines, containers and
            functions
          </li>
          <li>
            Programmable infrastructure and deployment models in cloud
            environments
          </li>
          <li>Cloud performance, security and energy efficiency aspects</li>
          <li>Operations and management of clouds</li>
          <li>Big Data science</li>
          <li>Big Data infrastructures and platforms</li>
          <li>Big Data applications</li>
          <li>Big Data trends and challenges</li>
          <li>Visualization of Big Data</li>
        </ul>

        <h2>Manuscript Guideline and Submission</h2>
        <p>
          Authors are invited to submit posters electronically. Submitted paper
          writeups should be structured as technical papers and submitted in PDF
          format. Papers may not exceed two (2) ACM-formatted double-column
          pages, including figures, tables, and references. All manuscripts will
          be reviewed and judged on correctness, originality,technical strength,
          rigour in analysis, quality of results, quality of presentation, and
          interest and relevance to the conference attendees. Your submission is
          subject to a determination that you are not under any sanctions by
          ACM. Accepted posters will later be converted into single-column
          format through the ACM TAPS process and therefore need to use the new
          templates that are single-column by default. Switch them to
          double-column for authoring your paper. This is possible in both the
          Word and the LaTeX templates.
        </p>

        <p>
          Download the{" "}
          <Link to="https://authors.acm.org/proceedings/production-information/preparing-your-article-with-latex">
            LaTeX
          </Link>{" "}
          or{" "}
          <Link to="https://authors.acm.org/proceedings/production-information/preparing-your-article-with-microsoft-word">
            Microsoft Word
          </Link>
        </p>

        <p>
          Manuscript submissions must be received by the announced submission
          deadline. All manuscripts will be reviewed by the Program Committee
          and evaluated based on originality, relevance of the problem to the
          conference theme, technical strength, rigour in analysis, quality of
          results, organization and clarity of presentation of the paper.
        </p>

        <p>
          Submitted papers must represent original unpublished research that is
          not currently under review for any other conference or journal.
          Further details on the publication instructions and registration
          information will be published on the UCC/BDCAT websites.
        </p>

        <p>
          The poster review and selection process will be coordinated by the
          posters co-chairs.
          <br />
          Beilei Jiang, University of North Texas, USA
          <br />
          Patricia Takako Endo, Universidade de Pernambuco, Brazil
        </p>

        <h2>Poster presentation</h2>
        <p>
          The authors of accepted posters will be given a 3-minutes time slot to
          present their work, following the three-minute thesis (3MT) style, at
          the UCC/BDCAT Poster Session. The authors will also present their
          posters and discuss their research with the conference attendees and
          visitors in the poster exhibition session. The recommended poster size
          is A0 (33.1 x 46.8 in, portrait).
        </p>

        <h2>Awards</h2>
        <p>
          One or more best poster awards will be given for outstanding poster
          presentations. Posters will be selected based on their reviewers'
          scores, contributions and appropriateness to the conference theme.
          Further details will be made available at the conference webpage.
        </p>
      </Content>
    </PageWrapper>
  );
};

export default CallForPosters;
