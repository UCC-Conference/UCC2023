import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const Program = () => {
  let defaultDay = 0;
  let currentDate = new Date();

  if (currentDate.toDateString() === new Date("2023-12-05").toDateString())
    defaultDay = 1;
  else if (currentDate.toDateString() === new Date("2023-12-06").toDateString())
    defaultDay = 2;
  else if (currentDate.toDateString() === new Date("2023-12-07").toDateString())
    defaultDay = 3;

  return (
    <PageWrapper>
      <Content>
        <div class="program-content">
          <h1>Program</h1>
          <hr />
          <h2>Technical Program Sessions</h2>
          <span>All times mentioned are in Central European Time (CET).</span>

          <Tabs defaultIndex={defaultDay}>
            <TabList>
              <Tab>Monday, December 4th</Tab>
              <Tab>Tuesday, December 5th</Tab>
              <Tab>Wednesday, December 6th</Tab>
              <Tab>Thursday, December 7th</Tab>
            </TabList>

            <TabPanel>
              <h4>Monday, December 4th, 2023, 8:00 - 8:45 | Registration</h4>
              <h4>Monday, December 4th, 2023, 8:45 – 9:00 | Opening</h4>
              <h4>
                Monday, December 4th, 2023, 9:00 – 10:00 | Keynote Speaker
              </h4>

              <div class="program-room">
                <p>Room A</p>
                <p className="session-chair">
                  Session Chair: Maria Fazio, University of Messina
                </p>
                <ul>
                  <li>
                    <strong>Frank Karlitschek, NextCloud CEO, Germany</strong>
                    <br />
                    <i>
                      What the AI revolution means for Science, Open Source and
                      Open Tech
                    </i>
                  </li>
                </ul>
              </div>
              <h4>Monday, December 4th, 2023, 10:00 – 10:30 | Coffee Break</h4>
              <h4>
                Monday, December 4th, 2023, 10:00 – 10:30 | Poster Session
              </h4>
              <h4>
                Monday, December 4th, 2023, 10:30 – 12:30 | Workshop Sessions
              </h4>

              <div class="program-room">
                <p>Room A – UCC Workshop: Intel4EC</p>
                <p>Room B – BDCAT Workshop: <Link to="https://fcrlab.unime.it/calls/bignda2023">BigNDA</Link></p>
              </div>

              <h4>Monday, December 4th, 2023, 12:30 – 14:30 | Lunch Break</h4>
              <h4>
                Monday, December 4th, 2023, 12:30 – 14:30 | Poster Session
              </h4>
              <h4>
                Monday, December 4th, 2023, 14:30 – 18:30 | Workshop Sessions
              </h4>

              <div class="program-room">
                <p>Room A – UCC Workshop: <Link to="https://sites.google.com/view/inspire2023">Inspire</Link></p>
                <p>Room A – UCC Workshop: <Link to="https://qserv23.github.io/">QSERV</Link></p>
                <p>Room A – BDCAT Workshop: <Link to="https://fcrlab.unime.it/calls/bignda2023">BigNDA for BDCAT4WM</Link></p>
                <p>Room B – UCC Workshop: <Link to="https://sites.google.com/unizar.es/cloudam2023">CloudAM</Link></p>
                <p>Room B – UCC Workshop: <Link to="http://www.lrc.ic.unicamp.br/dml-icc/">DML-ICC</Link></p>
              </div>

              <h4>
                Monday, December 4th, 2023, starting at 19:00 | Welcome Cocktail
              </h4>
              <p>
                Hotel Villa Diodoro, Via Bagnoli Croci, 75, 98039, Taormina,
                Italy
              </p>
              <br />
            </TabPanel>

            <TabPanel>
              <h4>Tuesday, December 5th, 2023, 8:00 – 9:00 | Registration</h4>
              <h4>
                Tuesday, December 5th, 2023, 9:00 – 10:00 | Keynote Speaker
              </h4>

              <div class="program-room">
                <p>Room A</p>
                <p className="session-chair">
                  Session Chair: Lorenzo Carnevale, University of Messina
                </p>
                <ul>
                  <li>
                    <strong>
                      Fakhri Karray, University of Waterloo, Canada
                    </strong>
                    <br />
                    <i>
                      Advances in Generative AI: Milestones and Societal Impact
                    </i>
                  </li>
                </ul>
              </div>

              <h4>Tuesday, December 5th, 2023, 10:00 – 10:30 | Coffee Break</h4>
              <h4>
                Tuesday, December 5th, 2023, 10:00 – 10:30 | Poster Session
              </h4>
              <h4>
                Tuesday, December 5th, 2023, 10:30 – 12:30 | UCC and BDCAT
                Sessions
              </h4>

              <div class="program-room">
                <p>Room A – UCC:</p>
                <p className="session-chair">
                  Session Chair: Dragi Kimovski, University of Klagenfurt
                </p>
                <ul>
                  <li>
                    <i>
                      <strong>
                        Event-Driven FaaS Workflows for Enabling IoT Data
                        Processing at the Cloud Edge Continuum.
                      </strong>
                    </i>
                    <br />
                    Christian Sicari, Daniel Balouek, Manish Parashar, Massimo
                    Villari | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        SDKV: A Smart and Distributed Key-Value Store for the
                        Edge-Cloud Continuum.
                      </strong>
                    </i>
                    <br />
                    Juan Aznar-Poveda, Tobias Pockstaller, Thomas Fahringer,
                    Stefan Pedratscher, Zahra Najafabadi Samani LLD: A
                    Last-Level Defense for Application Integrity and
                    Confidentiality | short paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        End-to-end Integration of Scientific Workflows on
                        Distributed Cyberinfrastructures: Challenges and Lessons
                        Learned with an Earth Science Application.
                      </strong>
                    </i>
                    <br />
                    Camila Roa, Mats Rynge, Paula Olaya, Karan Vahi, Todd
                    Miller, James Griffioen, Shelley Knuth, John Goodhue, David
                    Hudak, Alana Romanella, Ricardo Llamas, Rodrigo Vargas,
                    Miron Livny, Ewa Deelman, Michela Taufer | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Workflow Engines in the Compute Continuum: A Comparative
                        Analysis.
                      </strong>
                    </i>
                    <br />
                    Marco Garofalo, Gabriele Morabito, Maria Fazio, Antonio
                    Celesti, Massimo Villari | full paper
                  </li>
                </ul>
              </div>

              <div class="program-room">
                <p>Room B - BDCAT:</p>
                <p className="session-chair">
                  Session Chair: Armando Ruggeri, University of Messina
                </p>
                <ul>
                  <li>
                    <i>
                      <strong>
                        EPSAPG: A Pipeline Combining MMseqs2 and PSI-BLAST to
                        Quickly Generate Extensive Protein Sequence Alignment
                        Profiles.
                      </strong>
                    </i>
                    <br />
                    Issar Arab | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Cardiotocography Signal Abnormality Detection based on
                        Deep Semi-Unsupervised Learning.
                      </strong>
                    </i>
                    <br />
                    Julien Bertieaux, Mohammadhadi Shateri, Labeau Fabrice,
                    Thierry Dutoit | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        A Framework for Profiling Spatial Variability in the
                        Performance of Classification Models.
                      </strong>
                    </i>
                    <br />
                    Menuka Warushavithana, Kassidy Barram, Caleb Carlson,
                    Saptashwa Mitra, Sudipto Ghosh, Jay Breidt, Sangmi
                    Pallickara, Shrideep Pallickara | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Rubiks: Rapid Explorations and Summarization over High
                        Dimensional Spatiotemporal Datasets.
                      </strong>
                    </i>
                    <br />
                    Saptashwa Mitra, Matt Young, Jay Breidt, Sangmi Pallickara,
                    Shrideep Pallickara | full paper
                  </li>
                </ul>
              </div>

              <h4>Tuesday, December 5th, 2023, 12:30 – 14:30 | Lunch Break</h4>
              <h4>
                Tuesday, December 5th, 2023, 12:30 – 14:30 | Poster Session
              </h4>
              <h4>
                Tuesday, December 5th, 2023, 14:30 – 16:00 | UCC and Workshop
                Sessions
              </h4>

              <div class="program-room">
                <p>Room A - UCC:</p>
                <p className="session-chair">
                  Session Chair: Lorenzo Carnevale, University of Messina
                </p>
                <ul>
                  <li>
                    <i>
                      <strong>
                        FedBed: Benchmarking Federated Learning over Virtualized
                        Edge Testbeds.
                      </strong>
                    </i>
                    <br />
                    Moysis Symeonides, Fotis Nikolaidis, Demetris Trihinas,
                    George Pallis, Marios D. Dikaiakos, Angelos Bilas | full
                    paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Performance Analysis of Federated Learning in Orbital
                        Edge Computing.
                      </strong>
                    </i>
                    <br />
                    Mohammad Reza Jabbarpour, Bahman Javadi, Philip Leong,
                    Rodrigo N. Calheiros, David Boland, Chris Butler | full
                    paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        MPCFL: Towards Multi-party Computation for Secure
                        Federated Learning Aggregation.
                      </strong>
                    </i>
                    <br />
                    Hiroki Kaminaga, Feras M. Awaysheh, Sadi Alawadi, Liina Kamm
                    | full paper
                  </li>
                </ul>
              </div>

              <div class="program-room">
                <p>Room B – UCC Workshop: <Link to="http://cifs.servicelaboratory.ch/cifs2023/">CIFS</Link></p>
              </div>

              <h4>Tuesday, December 5th, 2023, 16:00 – 16:30 | Coffee Break</h4>
              <h4>
                Tuesday, December 5th, 2023, 16:00 – 16:30 | Poster Session
              </h4>
              <h4>
                Tuesday, December 5th, 2023, 16:30 – 18:00 | UCC and Workshop
                Sessions
              </h4>

              <div class="program-room">
                <p>Room A - UCC:</p>
                <p className="session-chair">
                  Session Chair: Bahman Javadi, Western Sydney University
                </p>
                <ul>
                  <li>
                    <i>
                      <strong>
                        Xfas: Fault Recovery by Externally Controlling OS
                        Behavior.
                      </strong>
                    </i>
                    <br />
                    Kento Kimura, Kenichi Kourai | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Compliance Management of IaC-Based Cloud Deployments
                        During Runtime.
                      </strong>
                    </i>
                    <br />
                    Ghareeb Falazi, Lukas Harzenetter, Kálmán Képes, Frank
                    Leymann, Uwe Breitenbücher, Evangelos Ntentos, Uwe Zdun,
                    Martin Becker, Elena Heldwein | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        NSDF-Services: Integrating Networking, Storage, and
                        Computing Services into a Testbed for Democratization of
                        Data Delivery.
                      </strong>
                    </i>
                    <br />
                    Jakob Luettgau, Heberth Martinez, Paula Olaya, Giorgio
                    Scorzelli, Glenn Tarcea, Jay Lofstead, Christine
                    Kirkpatrick, Valerio Pascucci, Michela Taufer | full paper
                  </li>
                </ul>
              </div>
              <div class="program-room">
                <p>Room B – UCC Workshop: <Link to="https://github.zhaw.ch/pages/milt/CEICO/">CEICO</Link></p>
              </div>
            </TabPanel>

            <TabPanel>
              <h4>Wednesday, December 6th, 2023, 8:00 – 9:00 | Registration</h4>
              <h4>
                Wednesday, December 6th, 2023, 9:00 – 10:00 | Invited Speaker
              </h4>

              <div class="program-room">
                <p>Room A</p>
                <p className="session-chair">
                  Session Chair: Omer Rana, University of Cardiff
                </p>
                <ul>
                  <li>
                    <strong>Manish Parashar, University of Utah, USA</strong>
                    <br />
                    <i>Envisioning a Computing Continuum for Science</i>
                  </li>
                </ul>
              </div>

              <h4>
                Wednesday, December 6th, 2023, 10:00 – 10:30 | Coffee Break
              </h4>
              <h4>
                Wednesday, December 6th, 2023, 10:00 – 10:30 | Poster Session
              </h4>
              <h4>
                Wednesday, December 6th, 2023, 10:30 – 12:30 | UCC and BDCAT
                Sessions
              </h4>

              <div class="program-room">
                <p>Room A – UCC</p>
                <p className="session-chair">
                  Session Chair: Fakhri Karray, University of Waterloo
                </p>
                <ul>
                  <li>
                    <i>
                      <strong>
                        Secure Neural Network Inference as a Service with
                        Resource-Constrained Clients.
                      </strong>
                    </i>
                    <br />
                    Rik de Vries, Zoltán Ádám Mann | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        CREMA: A Configurable Resource Management Recommendation
                        Framework for Cloud Systems.
                      </strong>
                    </i>
                    <br />
                    Justin Kur, Jingshu Chen, Qingyang Wang, Ji Xue, Jun Huang |
                    short paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Machine Learning for Predictive Resource Scaling of
                        Microservices on Kubernetes Platforms.
                      </strong>
                    </i>
                    <br />
                    Adam Rubak, Javid Taheri | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Using Machine Learning to Predict the Exact Resource
                        Usage of Microservice Chains.
                      </strong>
                    </i>
                    <br />
                    Javid Taheri, Arvid Gördén, Auday Al-Dulaimy | full paper
                  </li>
                </ul>
              </div>
              <div class="program-room">
                <p>Room B - BDCAT</p>
                <p className="session-chair">
                  Session Chair: Ester Zumpano, University of Calabria
                </p>
                <ul>
                  <li>
                    <i>
                      <strong>
                        Sleep Well: Pragmatic Analysis of the Idle States of
                        Intel Processors.
                      </strong>
                    </i>
                    <br />
                    Till Smejkal, Jan Bierbaum, Thomas Oberhauser, Horst
                    Schirmeier, Hermann Härtig | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Workload-Aware Cache Management of Bitmap Indices.
                      </strong>
                    </i>
                    <br />
                    Julia Kaeppel, Jason Sawin, David Chiu | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Cloud-Edge-Client Continuum: Leveraging Browsers as
                        Deployment Nodes with Virtual Pods.
                      </strong>
                    </i>
                    <br />
                    Mario Colosi, Marco Garofalo, Antonino Galletta, Maria
                    Fazio, Antonio Celesti, Massimo Villari | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Trillion Parameter AI Serving Infrastructure for
                        Scientific Discovery: A Survey and Vision.
                      </strong>
                    </i>
                    <br />
                    Nathaniel C Hudson, J. Gregory Pauloski, Matt Baughman, Alok
                    Kamatar, Mansi Sakarvadia, Logan Ward, Ryan Chard, André
                    Bauer, Maksim Levental, Wenyi Wang, Will Engler, Owen Price
                    Skelly, Ben Blaiszik, Rick Stevens, Kyle Chard, Ian Foster |
                    full paper
                  </li>
                </ul>
              </div>

              <h4>
                Wednesday, December 6th, 2023, 12:30 – 14:30 | Lunch Break
              </h4>
              <h4>
                Wednesday, December 6th, 2023, 12:00 – 14:30 | Poster Session
              </h4>
              <h4>
                Wednesday, December 6th, 2023, 14:30 – 16:00 | UCC and BDCAT
                Sessions
              </h4>

              <div class="program-room">
                <p>Room A – UCC</p>
                <p className="session-chair">
                  Session Chair: Antonino Galletta, University of Messina
                </p>

                <ul>
                  <li>
                    <i>
                      <strong>
                        Optimal Deployment of Cloud-native Applications with
                        Fault-Tolerance and Time-Critical End-to-End
                        Constraints.
                      </strong>
                    </i>
                    <br />
                    Remo Andreoli, Harald Gustafsson, Luca Abeni, Raquel Mini,
                    Tommaso Cucinotta | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Enhancing Deployment Variability Management by Pruning
                        Elements in Deployment Models.
                      </strong>
                    </i>
                    <br />
                    Miles Stötzner, Floriment Klinaku, Robin Dominic Pesl,
                    Steffen Becker | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Cloud Data Acquisition from Shared-Use Facilities in A
                        University-Scale Laboratory Information Management
                        System.
                      </strong>
                    </i>
                    <br />
                    Masatoshi Hanai, Mitsuaki Kawamura, Ryo Ishikawa, Toyotaro
                    Suzumura, Kenjiro Taura | full paper
                  </li>
                </ul>
              </div>
              <div class="program-room">
                <p>Room B – BDCAT</p>
                <p className="session-chair">
                  Session Chair: Patricia Takako Endo, Universidade de
                  Pernambuco
                </p>

                <ul>
                  <li>
                    <i>
                      <strong>
                        Real-time Route Planning to Reduce Pedestrian Pollution
                        Exposure in Urban Settings.
                      </strong>
                    </i>
                    <br />
                    Richard Sinnott, Siqi Zhong | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Privacy-Preserving Intrusion Detection System for
                        Internet of Vehicles using Split Learning.
                      </strong>
                    </i>
                    <br />
                    Paul Agbaje, Arkajyoti Mitra, Sena Hounsinou, Ebelechukwu
                    Nwafor, Habeeb Olufowobi | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Improving the Validation of Automotive Self-Learning
                        Systems through the Synergy of Scenario-Based Testing
                        and Metamorphic Relations.
                      </strong>
                    </i>
                    <br />
                    Marco Stang, Martin Sommer, David Kraus, Eric Sax | short
                    paper
                  </li>
                </ul>
              </div>
              <h4>
                Wednesday, December 6th, 2023, 16:00 – 16:30 | Coffee Break
              </h4>
              <h4>
                Wednesday, December 6th, 2023, 16:00 – 16:30 | Poster Session
              </h4>
              <h4>
                Wednesday, December 6th, 2023, 16:30 – 18:00 | UCC and BDCAT
                Sessions
              </h4>

              <div class="program-room">
                <p>Room A – UCC</p>
                <p className="session-chair">
                  Session Chair: Javid Taheri, Karlstad University
                </p>

                <ul>
                  <li>
                    <i>
                      <strong>
                        LLD: A Last-Level Defense for Application Integrity and
                        Confidentiality.
                      </strong>
                    </i>
                    <br />
                    Gabriel P Fernandez, Andrey Brito, Ardhi Hartono, Muhammad
                    Usama Sardar, Christof Fetzer | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Recognition of Denial-of-Service Attacks in IoT Networks
                        with Linear Complexity Model.
                      </strong>
                    </i>
                    <br />
                    Henrique Fell Lautert, Laércio Pioli, Douglas D. J. de
                    Macedo | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Sustainable placement of VNF chains in Intent-based
                        Networking.
                      </strong>
                    </i>
                    <br />
                    Tommaso Di Riccio, Jacopo Massa, Stefano Forti, Antonio
                    Brogi | full paper
                  </li>
                </ul>
              </div>
              <div class="program-room">
                <p>Room B – BDCAT</p>
                <p className="session-chair">
                  Session Chair: Shashikant Ilager, Vienna University of
                  Technology
                </p>

                <ul>
                  <li>
                    <i>
                      <strong>
                        Big Data-Driven Portfolio Simplification: Leveraging
                        Self-Labeled Clustering to Enhance Decision-Making.
                      </strong>
                    </i>
                    <br />
                    Minjuan Zhang, Chase Q Wu, Aiqin Hou | short paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        An Approach for Dynamic Behavioural Prediction and Fault
                        Injection in Cyber-Physical Systems.
                      </strong>
                    </i>
                    <br />
                    Hayatullahi B Adeyemo, Rami Bahsoon, Peter Tiňo | short
                    paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Malware Family Classification with Explainable BERT
                        (xBERT) Using API Calls.
                      </strong>
                    </i>
                    <br />
                    Ruba Kharsa, Fatih Kurugollu, Ashiq Anjum, Abbes Amira,
                    Ahmed Bouridane | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Strengthening Food Security: A Comparison of Food Import
                        Forecasting Models.
                      </strong>
                    </i>
                    <br />
                    Corrado Mio, Siddhartha Shakya, Himadri Khargharia, Dymitr
                    Ruta, Subey Dengur, Aisha Alshamsi, Asma Alawneh | short
                    paper
                  </li>
                </ul>
              </div>
            </TabPanel>

            <TabPanel>
              <h4>
                Thursday, December 7th, 2023, 08:00 – 09:00 | Registration
              </h4>
              <h4>
                Thursday, December 7th, 2023, 09:00 – 10:00 | Panel Session
              </h4>
              <div class="program-room">
                <p>Room A</p>
                <p className="session-chair">
                  Session Chair: Omer Rana, University of Cardiff
                </p>
                <p>
                  <strong>
                    The role of Cloud platforms providers to support Responsible
                    & Safe AI
                  </strong>
                </p>
                <p style={{ marginBottom: "20px" }}>
                  The focus of this panel is to discuss the role that cloud
                  hosting platforms need to play in supporting "safe" AI
                  services, which preserve user privacy and ensure compliance
                  with consumer protection legislation (such as the EU AI Act).
                </p>
                <p style={{ marginBottom: "20px" }}>
                  For instance the EU "Digital Services & Markets Act" includes
                  rules for online platforms & “gatekeeper” companies (Cloud
                  providers). These include large digital platforms providing
                  “core platform services”, such as online search engines, app
                  stores, messenger services.{" "}
                </p>
                <p>
                  The Digital Services & Markets act requires gatekeepers to:
                </p>
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    allow third parties to inter-operate with the gatekeeper’s
                    own services in certain specific situations;
                  </li>
                  <li>
                    allow their business users to access the data that they
                    generate in their use of the gatekeeper’s platform;
                  </li>
                  <li>
                    provide companies advertising on their platform with the
                    tools and information necessary for advertisers and
                    publishers to carry out their own independent verification
                    of their advertisements hosted by the gatekeeper;
                  </li>
                  <li>
                    allow their business users to promote their offer and
                    conclude contracts with their customers outside the
                    gatekeeper’s platform.
                  </li>
                </ul>
                <p style={{ marginTop: "20px" }}>
                  and prevent gatekeeper companies from:
                </p>
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    treating services and products offered by the gatekeeper
                    itself more favourably in ranking than similar services or
                    products offered by third parties on the gatekeeper's
                    platform;
                  </li>
                  <li>
                    preventing consumers from linking up to businesses outside
                    their platforms;
                  </li>
                  <li>
                    preventing users from un-installing any pre-installed
                    software or app if they wish to do so;
                  </li>
                  <li>
                    track end users outside of the gatekeepers' core platform
                    service for the purpose of targeted advertising, without
                    effective consent having been granted.
                  </li>
                </ul>
              </div>
              <h4>
                Thursday, December 7th, 2023, 10:00 – 10:30 | Coffee Break
              </h4>
              <h4>
                Thursday, December 7th, 2023, 10:00 – 10:30 | Poster Session
              </h4>
              <h4>Thursday, December 7th, 2023, 10:30 – 12:30 | UCC Session</h4>

              <div class="program-room">
                <p>Room A – UCC</p>
                <p className="session-chair">
                  Session Chair: Tomasz Szydlo, Newcastle University
                </p>
                <ul>
                  <li>
                    <i>
                      <strong>
                        Identifying Network Congestion Using Knowledge Graphs
                        and Link Prediction.
                      </strong>
                    </i>
                    <br />
                    Aikaterini Mitropoulou, Panagiotis Kokkinos, Emmanouel
                    Varvarigos | short paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Novel Strategies for Road Network Disruption Analysis.
                      </strong>
                    </i>
                    <br />
                    Annamaria Ficara, Giacomo Fiumara, Maria Fazio, Antonio
                    Celesti, Massimo Villari | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Tiny-Impute: A Framework for On-device Data Quality
                        Validation, Hybrid Anomaly Detection, and Data
                        Imputation at the Edge.
                      </strong>
                    </i>
                    <br />
                    Shamil Al-Ameen, Bharath Sudharsan, Tomasz Szydlo, Roua
                    Al-Taie, Tejal Shah, Rajiv Ranjan | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        A Systematic Technology Review of General-Purpose
                        Open-Source TOSCA Orchestrators.
                      </strong>
                    </i>
                    <br />
                    Miles Stötzner, Steffen Becker, Lukas Harzenetter, Frank
                    Leymann, Benjamin Weder, Uwe Breitenbücher, Oliver Kopp,
                    Kevin Klein, Jacopo Soldani | full paper
                  </li>
                </ul>
              </div>
              <h4>Thursday, December 7th, 2023, 12:30 – 14:30 | Lunch Break</h4>
              <h4>
                Thursday, December 7th, 2023, 12:30 – 14:30 | Poster Session
              </h4>
              <h4>Thursday, December 7th, 2023, 14:30 – 16:00 | UCC Session</h4>
              <div class="program-room">
                <p>Room A – UCC</p>
                <p className="session-chair">
                  Session Chair: Matt Baughmann, University of Chicago
                </p>
                <ul>
                  <li>
                    <i>
                      <strong>
                        The Early Microbenchmark Catches the Bug -- Studying
                        Performance Issues Using Micro- and Application
                        Benchmarks.
                      </strong>
                    </i>
                    <br />
                    Nils Japke, Christoph Witzko, Martin Grambow, David Bermbach
                    | full paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        Cloud Workload Categorization Using Various Data
                        Preprocessing and Clustering Techniques.
                      </strong>
                    </i>
                    <br />
                    Mustafa Daraghmeh, Anjali Agarwal, Yaser Jararweh | full
                    paper
                  </li>
                  <li>
                    <i>
                      <strong>
                        A Data-driven Analysis of a Cloud Data Center:
                        Statistical Characterization of Workload, Energy and
                        Temperature.
                      </strong>
                    </i>
                    <br />
                    Shashikant Ilager, Adel N Toosi, Mayank Raj Jha, Ivona
                    Brandic, Rajkumar Buyya | full paper
                  </li>
                </ul>
              </div>
              <h4>Thursday, December 7th, 2023, 16:00 – 16:30 | Closing</h4>
              <br />
            </TabPanel>
          </Tabs>
        </div>
      </Content>
    </PageWrapper>
  );
};

export default Program;
