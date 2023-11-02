import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import plus from "../assets/icons/plus.png";
import minus from "../assets/icons/minus.png";

import ManishParashar from "../assets/keynotes/ManishParashar.jpg";

const InvitedSpeakers = () => {
  return (
    <PageWrapper>
      <Content>
        <h1>Invited Speakers</h1>
        <hr />

        <div className="keynote-block">
          <div className="keynote-info">
            <div>
              <h1>Manish Parashar</h1>
              <h3>University of Utah, USA</h3>
              <h2>
              Envisioning a Computing Continuum for Science
              </h2>
            </div>
            <div>
              <img
                src={ManishParashar}
                alt="Manish Parashar"
                style={{ maxWidth: "250px" }}
              />
            </div>
          </div>
          <Accordion preExpanded={["b0"]}>
            <AccordionItem uuid="b0">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Abstract</span>
                  <img src={plus} alt="plus" className="plus" />
                  <img src={minus} alt="minus" className="minus" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Emerging data-driven scientific workflows are seeking to leverage distributed data sources to understand end-to-end phenomenon, drive experimentation, and facilitate important decision making. Despite the exponential growth of available digital data sources at the edge, and the ubiquity of non-trivial computational power for processing this data, realizing such science workflows remains challenging. In this talk I will explore a computing continuum that is everywhere and nowhere -- one spanning resources at the edges, in the core and in-between, and providing abstractions that can be harnessed to support science. I will also introduce recent research in programming abstractions that can express what data should be processed and when and where it should be processed, and autonomic middleware services that automate the discovery of resources and the orchestration of computations across these resources.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="b1">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Short Bio</span>
                  <img src={plus} alt="plus" className="plus" />
                  <img src={minus} alt="minus" className="minus" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                Manish Parashar is Director of the Scientific Computing and Imaging (SCI) Institute, Chair in Computational Science and Engineering, and Presidential Professor, Kalhert School of Computing at the University of Utah. He recently completed an IPA appointment at the National Science Foundation where he served as Office Director of the NSF Office of Advanced Cyberinfrastructure, as well as co-chair of the National Science and Technology Council’s Subcommittee on the Future Advanced Computing Ecosystem and the National Artificial Intelligence Research Resource Task Force (NAIRR). Manish is the founding chair of the IEEE Technical Consortium on High Performance Computing (TCHPC), and is Fellow of AAAS, ACM, and IEEE/IEEE Computer Society. For more information, please visit http://manishparashar.org.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </Content>
    </PageWrapper>
  );
};

export default InvitedSpeakers;
