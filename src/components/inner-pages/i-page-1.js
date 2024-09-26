import React from "react";
import HeroCard from "./HeroCard";
import Rapidscat from "./Rapidscat";
import Satelite from "./Satelite";

export default function IPage1() {
  return (
    <div style={{ padding: "20px", paddingRight: "0" }}>
      <div className="scrollable-container">
        <HeroCard />
        <Rapidscat />
        <Satelite />
      </div>
    </div>
  );
}
