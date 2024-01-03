import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const BestPaperAwards = () => {
  return (
    <PageWrapper>
      <Content>
        <h1>Best Paper Awards</h1>
        <hr />
        <div className="award" id="firstPlace">
          <h2>1st Place</h2>
          <p>
            <b>
            A Data-driven Analysis of a Cloud Data Center: Statistical Characterization of Workload, Energy and Temperature.
            </b>
            <br />
            Shashikant Ilager, Adel N Toosi, Mayank Raj Jha, Ivona Brandic, Rajkumar Buyya
          </p>
        </div>

        <div className="award" id="secondPlace">
          <h2>2nd Place</h2>
          <p>
            <b>
            FedBed: Benchmarking Federated Learning over Virtualized Edge Testbeds.
            </b>
            <br />
            Moysis Symeonides, Fotis Nikolaidis, Demetris Trihinas, George Pallis, Marios D. Dikaiakos, Angelos Bilas
          </p>
        </div>

        <div className="award" id="thirdPlace">
          <h2>3rd Place</h2>
          <p>
            <b>
              Event-Driven FaaS Workflows for Enabling IoT Data Processing at
              the Cloud Edge Continuum
            </b>
            <br />
            Christian Sicari, Daniel Balouek, Manish Parashar, Massimo Villari
          </p>
        </div>
      </Content>
    </PageWrapper>
  );
};

export default BestPaperAwards;
