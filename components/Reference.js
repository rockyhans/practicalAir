import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Reference() {
  return (
    // Leave the bootstrap as it is -- willl be easy
    <div className="referencePage">
      <div className="someText">
        <h3>Frequently Asked Questions?</h3>
        <p>
          Find answers to common questions that come in your mind related to
          IPO.
        </p>
      </div>
      <div className="container">
        <Accordion defaultActiveKey="0" flush style={{ marginTop: "50px" }}>
          <Accordion.Item
            eventKey="0"
            style={{ marginBottom: "20px", fontWeight: "bolder" }}
          >
            <Accordion.Header>
              <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
                How to Subscribe to an IPO?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li> Step 1: Login to your respective service provider.</li>
                <li>Step 2: Click on the IPO button.</li>
                <li>
                  Step 3: Select the IPO you want to bid and enter the relevant
                  details.
                </li>
                <li>
                  Step 4: Your subscription will be completed once you make the
                  payment or give permission.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {[
            "Should I buy an IPO first day?",
            "How do you know if an IPO is good?",
            "How to check IPO start date?",
            "What is issue size?",
            "How many shares in a lot?",
            "How is the lot size calculated?",
            "Who decides the IPO price band?",
            "What is IPO GMP?",
            "How many lots should I apply for IPO?",
          ].map((question, index) => (
            <Accordion.Item
              eventKey={`${index + 1}`}
              key={index}
              style={{ marginBottom: "20px", fontWeight: "bolder" }}
            >
              <Accordion.Header>
                <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
                  {question}
                </span>
              </Accordion.Header>
              <Accordion.Body>
                {/* You can add answers here if needed */}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Reference;
