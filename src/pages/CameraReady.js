import React from "react";
import { Link } from "react-router-dom";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const CameraReady = () => {
  return (
    <PageWrapper>
      <Content>
        <h1>Camera-Ready Submission Instructions</h1>
        <hr />
        <p>
          Before you upload your paper, make sure that the paper title and the
          ordered list of authors in the PDF is identical to the information you
          have entered in CMT.
        </p>
        <p>
          Please read carefully the reviewers’ comments, which are intended to
          help you to improve your paper for final publication. The listed
          comments should be addressed, as acceptance is conditional on
          appropriate response to the requirements and comments. IEEE/ACM UCC
          2023 requires that the submitted manuscript is solely from the
          author’s own work and not from the work of others, unless explicit
          permission has been granted. This includes text, figures and tables.
          Information from published articles must always be cited explicitly.
          Proper citation is to give the credit to the work that is originally
          published, not to follow-up work or reviews. Citations should be given
          close to the information within the sentences or at the end of the
          sentence, not after several sentences or near the end of the
          paragraph. Even when citations are given, exact copying of a whole
          sentence or paragraphs should be indicated by quotation marks.
          Furthermore, reuse of part of a published figure or table requires a
          copyright permission from the publishers that hold the rights. All
          re-published figures and tables should explicitly indicate the
          original source.
        </p>
        <p>
          Then, Proofread and check layout of paper. All papers submitted
          through the web site are considered to be in final form and ready for
          publication. Do not submit your paper until you are ready. A good
          suggestion is to have a few colleagues review your paper to provide
          final remarks on its suitability before submitting it through the web
          site.
        </p>
        <p>
          Accepted papers will be published in the IEEE/ACM UCC Proceedings.
          Accepted and presented papers will be submitted for publication in
          IEEE Xplore® Digital Library and ACM Digital Library. If a paper is
          not presented at the conference, it will be removed from the web site
          and proceedings.
        </p>

        <h2>Formatting Guidelines</h2>
        <ul>
          <li>Final Camera Ready Papers must be in English.</li>
          <li>
            Note that you will actually update the existing manuscript
            previously submitted.
          </li>
          <li>
            The list of authors for camera-ready paper must be the same as the
            list of authors for the review version.
          </li>
          <li>Provide an abstract of fewer than 200 words.</li>
          <li>Author Bios are NOT needed.</li>
          <li>
            We must be able to display and print your submission exactly as we
            receive it and using only standard tools and postscript printers, so
            we strongly suggest that you use only standard fonts.
          </li>
          <li>
            Make sure that the paper prints well on black-and-white printers,
            not color printers. This is especially true for plots and graphs in
            the paper.
          </li>
          <li>
            Make sure that the output has been formatted for printing on LETTER
            (8.5″ by 11″) size paper.
          </li>
          <li>
            For LaTeX sources, you must use the ACM template provided here:{" "}
            <br />
            <Link to="https://www.overleaf.com/latex/templates/acm-conference-proceedings-primary-article-template/wbvnghjbzwpc">
              https://www.overleaf.com/latex/templates/acm-conference-proceedings-primary-article-template/wbvnghjbzwpc
            </Link>
            .
          </li>
          <li>
            For MS Word sources, you must use the ACM template provided here:{" "}
            <br />
            <Link to="https://www.acm.org/binaries/content/assets/publications/word_style/interim-template-style/interim-layout.docx">
              https://www.acm.org/binaries/content/assets/publications/word_style/interim-template-style/interim-layout.docx
            </Link>
          </li>
          <li>
            Authors accepted as <strong>Long Paper</strong>:
            <ul>
              <li>
                Manuscripts are submitted in PDF format and may not exceed ten
                (10) ACM-formatted double-column pages, including figures,
                tables, and references during the registration.
              </li>
            </ul>
          </li>

          <li>
            Authors accepted as <strong>Short Paper</strong>:
            <ul>
              <li>
                Short Papers must be no longer than six (6) pages (no cover
                page) ACM-formatted double-column pages, including figures,
                tables, and references during the registration.{" "}
              </li>
            </ul>
          </li>
        </ul>
      </Content>
    </PageWrapper>
  );
};

export default CameraReady;
