import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import loggn from "./image.png";

function MainC() {
  return (
    // This is completly backend part -- leave it just for view
    <div className="mainComp">
      <div
        className="main  rounded p-3"
        style={{ width: "381px", fontSize: "14px" }}
      >
        {/* Logo + Title */}
        <div className="d-flex align-items-center mb-3 flexDiv1">
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
            }}
            className="me-2"
          >
            <img alt="hi" src={loggn} />
          </div>
          <h5 className="m-0 text-primary fw-semibold">Nova Agritech Ltd.</h5>
        </div>

        {/* Info Grid */}
        <div className="row text-center mb-3">
          <div className="col-4">
            <div className="text-muted">PRICE BAND</div>
            <div className="fw-semibold">Rs 39 – 41</div>
          </div>
          <div className="col-4">
            <div className="text-muted">OPEN</div>
            <div className="fw-semibold">2024-01-22</div>
          </div>
          <div className="col-4">
            <div className="text-muted">CLOSE</div>
            <div className="fw-bold">
              2024-01-24<span className="text-danger">.</span>
            </div>
          </div>
        </div>

        <div className="row text-center mb-3">
          <div className="col-4">
            <div className="text-muted">ISSUE SIZE</div>
            <div className="fw-semibold">143.81 Cr.</div>
          </div>
          <div className="col-4">
            <div className="text-muted">ISSUE TYPE</div>
            <div className="fw-semibold">Book Built</div>
          </div>
          <div className="col-4">
            <div className="text-muted">LISTING DATE</div>
            <div className="fw-semibold">2024-01-30</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-outline-primary px-4 py-1 fw-semibold">
            RHP
          </button>
          <button className="btn btn-danger px-4 py-1 fw-semibold">DRHP</button>
        </div>
      </div>
      <div
        className="main  rounded p-3"
        style={{ width: "381px", fontSize: "14px" }}
      >
        {/* Logo + Title */}
        <div className="d-flex align-items-center mb-3">
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
            }}
            className="me-2"
          ></div>
          <h5 className="m-0 text-primary fw-semibold">Nova Agritech Ltd.</h5>
        </div>

        {/* Info Grid */}
        <div className="row text-center mb-3">
          <div className="col-4">
            <div className="text-muted">PRICE BAND</div>
            <div className="fw-semibold">Rs 39 – 41</div>
          </div>
          <div className="col-4">
            <div className="text-muted">OPEN</div>
            <div className="fw-semibold">2024-01-22</div>
          </div>
          <div className="col-4">
            <div className="text-muted">CLOSE</div>
            <div className="fw-bold">
              2024-01-24<span className="text-danger">.</span>
            </div>
          </div>
        </div>

        <div className="row text-center mb-3">
          <div className="col-4">
            <div className="text-muted">ISSUE SIZE</div>
            <div className="fw-semibold">143.81 Cr.</div>
          </div>
          <div className="col-4">
            <div className="text-muted">ISSUE TYPE</div>
            <div className="fw-semibold">Book Built</div>
          </div>
          <div className="col-4">
            <div className="text-muted">LISTING DATE</div>
            <div className="fw-semibold">2024-01-30</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-outline-primary px-4 py-1 fw-semibold">
            RHP
          </button>
          <button className="btn btn-danger px-4 py-1 fw-semibold">DRHP</button>
        </div>
      </div>
      <div
        className="main  rounded p-3"
        style={{ width: "381px", fontSize: "14px" }}
      >
        {/* Logo + Title */}
        <div className="d-flex align-items-center mb-3">
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#f8f9fa",
              borderRadius: "5px",
            }}
            className="me-2"
          ></div>
          <h5 className="m-0 text-primary fw-semibold">Nova Agritech Ltd.</h5>
        </div>

        {/* Info Grid */}
        <div className="row text-center mb-3">
          <div className="col-4">
            <div className="text-muted">PRICE BAND</div>
            <div className="fw-semibold">Rs 39 – 41</div>
          </div>
          <div className="col-4">
            <div className="text-muted">OPEN</div>
            <div className="fw-semibold">2024-01-22</div>
          </div>
          <div className="col-4">
            <div className="text-muted">CLOSE</div>
            <div className="fw-bold">
              2024-01-24<span className="text-danger">.</span>
            </div>
          </div>
        </div>

        <div className="row text-center mb-3">
          <div className="col-4">
            <div className="text-muted">ISSUE SIZE</div>
            <div className="fw-semibold">143.81 Cr.</div>
          </div>
          <div className="col-4">
            <div className="text-muted">ISSUE TYPE</div>
            <div className="fw-semibold">Book Built</div>
          </div>
          <div className="col-4">
            <div className="text-muted">LISTING DATE</div>
            <div className="fw-semibold">2024-01-30</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-outline-primary px-4 py-1 fw-semibold">
            RHP
          </button>
          <button className="btn btn-danger px-4 py-1 fw-semibold">DRHP</button>
        </div>
      </div>
    </div>
  );
}

export default MainC;
