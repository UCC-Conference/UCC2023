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

import FakhriKarray from "../assets/keynotes/FakhriKarray.jpg";
import FrankKarlitschek from "../assets/keynotes/FrankKarlitschek.png";

const KeanoteSpeakers = () => {
  return (
    <PageWrapper>
      <Content>
        <h1>Keynote Speakers</h1>
        <hr />

        <div className="keynote-block">
          <div className="keynote-info">
            <div>
              <h1>Fakhri Karray</h1>
              <h3>University of Waterloo, Canada</h3>
              <h2>
                Advances in Generative AI : Milestones and Societal Impact
              </h2>
            </div>
            <div>
              <img
                src={FakhriKarray}
                alt="Fakhri Karray"
                style={{ maxWidth: "200px" }}
              />
            </div>
          </div>

          <Accordion preExpanded={["a0"]}>
            <AccordionItem uuid="a0">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Abstract</span>
                  <img src={plus} alt="plus" className="plus" />
                  <img src={minus} alt="minus" className="minus" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  The presentation discusses recent developments and notable
                  progress in Artificial Intelligence (AI), specifically
                  Generative Artificial Intelligence (GAI). Remarkable
                  achievements in this field, including ChatGPT, BARD, LLaMA,
                  and other generative AI engines, coupled with advancements in
                  machine learning and AI tools, suggest we stand on the brink
                  of a transformative technological revolution with
                  unprecedented implications for humanity. Projections indicate
                  that AI could boost the global GDP by as much as 20% by 2025,
                  equivalent to over $15 trillion in growth within the coming
                  years. These advancements have significantly influenced
                  innovation in various domains, such as the Internet of Things,
                  autonomous machinery, robust chatbots, virtual assistants,
                  human-machine interfaces, extensive language models, real-time
                  translators, cognitive robotics, accurate disease diagnosis,
                  remote healthcare monitoring, financial market forecasting,
                  and Fintech, among others. While AI encompasses a range of
                  interconnected technologies, all aimed at emulating aspects of
                  human intelligence and decision-making, transformer algorithms
                  are recognized as the driving force behind AI's explosive
                  expansion, permeating nearly every sector of the modern global
                  economy. The presentation outlines key milestones that have
                  driven the current GAI growth, emphasizing the roles of
                  academic institutions, industry, and government. Additionally,
                  it delves into critical concerns related to security,
                  governance, and privacy, highlighting the potential for
                  significant negative impacts on society and end users if not
                  promptly and effectively addressed.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="a1">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Short Bio</span>
                  <img src={plus} alt="plus" className="plus" />
                  <img src={minus} alt="minus" className="minus" />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Fakhri Karray is the inaugural co-director of the University
                  of Waterloo Artificial Intelligence Institute and served as
                  the Loblaws Research Chair in Artificial Intelligence in the
                  department of electrical and computer engineering at the
                  University of Waterloo, Canada. He is also Professor of
                  Machine Learning and held the position of Provost at the
                  Mohamed bin Zayed University of Artificial Intelligence
                  (MBZUAI), a researchoriented artificial intelligence (AI)
                  institution in Abu Dhabi, UAE. Fakhri's research focuses on
                  operational and generative AI, cognitive machines, natural
                  human-machine interaction, and autonomous and intelligent
                  systems, with applications to virtual care systems, cognitive
                  and self-aware devices, and predictive analytics in supply
                  chain management and intelligent transportation systems.
                  Notably, Fakhri and his research team's work on deep
                  learning-based driver behavior recognition and prediction has
                  gained recognition in The Washington Post, Wired Magazine,
                  Globe and Mail, CBC radio, and Canada's Discovery Channel. He
                  also holds editorial roles in major publications related to
                  intelligent systems and information fusion. Fakhri's latest
                  textbook, "Elements of Dimensionality Reduction and Manifold
                  Learning," was published by Springer Nature in early 2023. In
                  2021, he was honored by the IEEE Vehicular Technology Society
                  (VTS) with the IEEE VTS Best Land Transportation Paper Award
                  for his pioneering research on enhancing traffic flow
                  prediction using deep learning and AI. Furthermore, his
                  research on federated learning in communication systems earned
                  him and his co-authors the 2022 IEEE Communication Society's
                  MeditCom Conference Best Paper Award. Fakhri is also the
                  co-founder and Chief Scientist of Yourika.ai, a provider of
                  AI-based online learning systems. He holds fellowship status
                  in the IEEE, the Canadian Academy of Engineering, and the
                  Engineering Institute of Canada. Additionally, he has served
                  as a Distinguished Lecturer for the IEEE and is a Fellow of
                  the Kavli Frontiers of Science. Fakhri earned his Ph.D. from
                  the University of Illinois Urbana-Champaign, USA.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="keynote-block">
          <div className="keynote-info">
            <div>
              <h1>Frank Karlitschek</h1>
              <h3>NextCloud CEO, Germany </h3>
              <h2>
                What the AI revolution means for Science, Open Source and Open
                Tech
              </h2>
            </div>
            <div>
              <img
                src={FrankKarlitschek}
                alt="Frank Karlitschek"
                style={{ maxWidth: "300px" }}
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
                  In the last year we saw the rise of AI systems like ChatGPT,
                  Stable Diffusion, Dall-E and others. Large Language Models
                  like GPT are enabling a lot of new innovative features and
                  products which will revolutionise the world. But this large
                  autoregressive language models come with a lot of challenges
                  that can have negative effects on the Open Source and Open
                  Tech community. For example it’s unclear if in the future
                  everyone will have access to the same ML models and training
                  data. Can students, startups and open source people build
                  innovative new products using AI in the same way the open
                  source communities build Open Code and Open Tech. How can we
                  make sure that the AI system are not discriminating
                  underrepresented minorities? What is the energy consumption
                  and CO2 emissions of this new big AI systems? This talk will
                  discuss the current challenges around AI and the current Open
                  Source AI features in Nextcloud, our Ethical AI framework and
                  our approach to run AI locally.
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
                  Frank Karlitschek is a long time open source contributor and
                  former board member of the KDE e.V. He founded Nextcloud in
                  2016 to create a fully open source and decentralised
                  alternative to big centralised cloud companies. Frank was an
                  invited expert at the W3C to help to create the ActivityPub
                  standard. Frank has spoken at MIT, CERN, Harvard and ETH and
                  keynoted LinuxCon, Latinoware, FOSSASIA, Campus Party and many
                  other conferences. Frank is the founder and CEO of Nextcloud
                  GmbH. He is also a fellow of Open Forum Europe and an advisor
                  to the United Nations regarding Open Source
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </Content>
    </PageWrapper>
  );
};

export default KeanoteSpeakers;
