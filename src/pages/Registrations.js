import React, { useState } from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";
import Switch from "react-switch";
import check from "../assets/icons/check.svg";
import { Link } from "react-router-dom";

const fees = {
  early: [
    {
      title: "Full Conference",
      fee: 890,
      roles: ["IEEE/ACM Member"],
    },
    {
      title: "Full Conference",
      fee: 850,
      roles: ["IEEE/ACM Student Member"],
    },
    {
      title: "Full Conference",
      fee: 980,
      roles: ["Non-Member", "Student Non-Member"],
    },
    {
      title: "EU Day (to be defined)",
      fee: "-",
      roles: [
        "IEEE/ACM Member",
        "IEEE/ACM Student Member",
        "Non-Member",
        "Student Non-Member",
      ],
    },
  ],
  late: [
    {
      title: "Full Conference",
      fee: 980,
      roles: ["IEEE/ACM Member", "IEEE/ACM Student Member"],
    },
    {
      title: "Full Conference",
      fee: 1250,
      roles: ["Non-Member", "Student Non-Member"],
    },
    {
      title: "EU Day (to be defined)",
      fee: "-",
      roles: [
        "IEEE/ACM Member",
        "IEEE/ACM Student Member",
        "Non-Member",
        "Student Non-Member",
      ],
    },
  ],
};

const Registrations = () => {
  const [type, setType] = useState("early");

  function toggleState() {
    setType(type === "early" ? "late" : "early");
  }

  function createCards(type) {
    const cards = fees[type].map((fee) => {
      return (
        <div className="card-fee">
          <h3>{fee.title}</h3>
          {
            typeof fee.fee === "string" ? (
                <p>{fee.fee}</p>
                ) : (
                <p>€ {fee.fee},00</p>
                )
          }
          <div>
            {fee.roles.map((role) => {
              return (
                <p>
                  <img src={check} alt="check" />
                  <span>{role}</span>
                </p>
              );
            })}
          </div>
          <div className="space"></div>
          <Link to="#" className="btn btn-primary">
            Go to registration
          </Link>
        </div>
      );
    });
    return cards;
  }

  return (
    <PageWrapper>
      <Content>
        <h1 className="text-centered">Conference registrations</h1>
        <hr className="centered" />
        <div className="center-p">
          <p>
            <b>Early Registration rates end on October 31, 2023.</b>
          </p>
          <p>
            All deadlines are at 11:59 PM on the stated date.
            <br />
            All rates listed are in EUR.
          </p>
          <p>
            Registrations and payments are to be made via an online registration
            system.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <span>Early registration</span>
          <Switch
            checked={type === "late"}
            onChange={toggleState}
            onColor="#851616"
            onHandleColor="#aa1717"
            handleDiameter={30}
            uncheckedIcon={true}
            checkedIcon={true}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
          <span>Normal Price</span>
        </div>
        <br />
        <p style={{color: '#aa1717', textAlign: 'center', fontWeight: 600}}>The registration system will be opened soon</p>
        <div class="fees-cards">{createCards(type)}</div>

        <br />
        <p>
          Registration includes:
          <ul>
            <li>Materials;</li>
            <li>Access to all conference sessions;</li>
            <li>
              Proceedings: abstracts and papers will be included in the
              proceedings only if at least one author has registered and paid
              the registration fee. One registration covers maximum 1 (one)
              paper.
            </li>
            <li>Attendance at the welcome event;</li>
            <li>
              Lunches and refreshments (from Dec 4th to 7th; on Oct 4th the
              lunch will be in Messina);
            </li>
            <li>
              Conference Dinner (additional tickets may be purchased for €
              100,00).
            </li>
          </ul>
        </p>
        <h2>Important Author Information</h2>
        <p>
          At least one author of each paper must be registered for the
          conference in order for the paper to be published in the proceedings.
          <br />
          <ul>
            <li>
              {" "}
              Student author registrations are available only to student authors
              when a non-student registration has already been paid for the
              paper
            </li>
            <li>Each Author Registration is valid for ONE paper.</li>
            <li>
              Each paper may contain up to 2 additional pages for a fee of
              € 100,00/page.
            </li>
          </ul>
        </p>
        <h2>Cancellation policy</h2>
        <p>
          A cancellation fee of € 300,00 will be applied for conference
          registrations canceled. If your category fee is lower than the cancellation
          fee, no refunds can be issued.
        </p>
        <h2>Insurance</h2>
        <p>
          Insurance, including medical cover, travel cover, and expenses
          incurred in the event is <strong>your responsibility</strong>. Please
          discuss insurance cover with your travel agent when booking your
          travel.
        </p>
        {/* <h2>VISA and invitation letter</h2>
        <p>
          For requesting the Invitation Letter, only after the Registration
          Process is completed, please send an email to xxx@yyy.it
        </p> */}
      </Content>
    </PageWrapper>
  );
};

export default Registrations;
