import React from "react";
import "./components.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function NdNav() {
  return (
    <div>
      <div className="ndNav">
        <div className="smallText">
          <p>Bluestock</p>
          <i class="bi bi-chevron-right font-weight-bold"></i>
          <p>IPO</p>
          <i class="bi bi-chevron-right"></i>
          <p className="text-dark">UPCOMING IPO</p>
        </div>
        <div className="ipoText">
          <h3>Upcoming IPO</h3>
        </div>
        <div className="smallText">
          <p className="text-dark downText">
            Companies that have filled for an IPO with SEBI. Few details might
            be disclosed by the companies later.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NdNav;
