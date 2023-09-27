import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import { Link } from "react-router-dom";

import CfaPdf from "../assets/documents/CallForArtifacts/callForArtifacts-UCCBDCAT2023.pdf";
import CfaTxt from "../assets/documents/CallForArtifacts/callForArtifacts-UCCBDCAT2023.txt";

const CallForWorkshops = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Call for Artifacts</h1>
                <hr />
                <p>
                    [<a href={CfaPdf} target="_blank" rel="noreferrer">PDF</a>] - [<a href={CfaTxt} target="_blank" rel="noreferrer">Txt</a>]
                </p>
                <h2>Overview</h2>
                <p>
                As reproducibility and availability of artifacts -or lack thereof- affect the impact and visibility of a paper, computer science conferences are putting in place artifact evaluation tracks. 
                </p>
                <p>
                An artifact of a paper is an element that extends beyond the document itself, this can be software, datasets, environment configuration, workflow definition, hardware, benchmarks, scripts to run experiments. 
                </p>
                <p>
                Based on the success and experience of artifact evaluation for similar conferences, this year UCC/BDCAT 2023 will evaluate artifacts in a more standardized way than previous years. In particular, the process will be single-blinded, it will use a special track using Microsoft CMT and a timeline will need to be respected by both the authors and the evaluation committee. 
                </p>
                <p>
                Although the artifacts will be evaluated after acceptance notification, we encourage all interested authors to prepare and register artifacts well in advance. 
                </p>

                <h2>Artifact Evaluation Organization and Evaluation</h2>
                <p>
                The goal of the artifact evaluation track is to award badges to accepted papers. These badges will be based on the <Link to="https://www.niso.org/publications/rp-31-2021-badging">NISO Reproducibility Badging and Definitions Standard</Link> and the <Link to="https://www.acm.org/publications/artifacts">ACM Reproducibility Standard</Link>. 
                </p>
                <p>
                The badges available are (in an incremental inclusive order) Artifacts Available, Artifacts Evaluated-Functional and Results Replicated. Authors should choose the desired badge based on the maturity and expected reproducibility of their work. 
                </p>
                <p>
                All papers submitted to UCC/BDCAT 2023 are encouraged to submit an Artifact Description using a form to be provided). For evaluating the reproducibility of the experiments, a complete description of the experiment workflow will be asked, together with an estimation of the execution time and a description of the expected results. 
                </p>
                <p>
                The Artifact Description documentation should include version-controlled software and data repositories such as Zenodo, FigShare, Dryad, GitHub, GitLab. Authors should consider providing the most suitable packaging for the paper’s artifact, this could be: source code, container/VM, binary installer, live web deployment, access to special hardware or cloud services (with security precautions concerning access by the reviewer). 
                </p>
                <p>
                A single-blinded evaluation will be done, and the committee will validate and evaluate the completion of the form as well as the artifact accessibility.  
                </p>
                
                <h2>Important Dates</h2>
                <p>
                    <strong>Artifact abstract registration deadline</strong>: September 30, 2023
                    <br />
                    <strong>(paper) Acceptance notification to paper authors</strong>: October 21, 2023
                    <br />
                    <strong>(paper) Camera-ready deadline</strong>: October 31, 2023
                    <br />
                    <strong>Artifact submission deadline</strong>: November 3, 2023
                    <br />
                    <strong>Response period</strong>: November 17, 2023 – November 22, 2023 
                    <br />
                    <strong>Artifact decisions announcement</strong>: November 30, 2023
                    <br />
                    <strong>Badges visible on published paper records in ACM DL</strong>: around December 2023 
                </p>

                <h2>Reproducibility Committee Co-Chairs </h2>
                <p>
                Pamela Delgado, University of Applied Sciences Western Switzerland (HES-SO) <br/>
                Josef Spillner, Zurich University of Applied Sciences, Switzerland (ZHAW) 
                </p>
            </Content>
        </PageWrapper>
    );
};

export default CallForWorkshops;
