import React, { useState } from "react";
import "./Home.css";

import Page1 from "./page-1.js";
import Page2 from "./page-2.js";
import Page3 from "./page-3.js";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("page1");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleKeyDown = (e, tab) => {
    if (e.key === "Enter" || e.key === " ") {
      setSelectedTab(tab);
    }
  };

  const renderPage = () => {
    switch (selectedTab) {
      case "page1":
        return <Page1 />;
      case "page2":
        return <Page2 />;
      case "page3":
        return <Page3 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="back-i">
        <div>
          <div className="animated-container">
            <div className="animated-card2 animate">
              <div className="box-data">
                <div className="navbar">
                  <div className="company-name">
                    <div
                      className={`text-box ${
                        selectedTab === "page1" ? "selected" : ""
                      }`}
                      onClick={() => handleTabClick("page1")}
                      onKeyDown={(e) => handleKeyDown(e, "page1")}
                      role="button"
                      tabIndex="0"
                    >
                      3CS
                    </div>
                  </div>
                  <ul className="nav-pages">
                    <li>
                      <div
                        className={`text-box ${
                          selectedTab === "page1" ? "selected-text" : ""
                        }`}
                        onClick={() => handleTabClick("page1")}
                        onKeyDown={(e) => handleKeyDown(e, "page1")}
                        role="button"
                        tabIndex="0"
                      >
                        <span className="nav-pages-t">Page 1</span>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`text-box ${
                          selectedTab === "page2" ? "selected-text" : ""
                        }`}
                        onClick={() => handleTabClick("page2")}
                        onKeyDown={(e) => handleKeyDown(e, "page2")}
                        role="button"
                        tabIndex="0"
                      >
                        <span className="nav-pages-t">Page 2</span>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`text-box ${
                          selectedTab === "page3" ? "selected-text" : ""
                        }`}
                        onClick={() => handleTabClick("page3")}
                        onKeyDown={(e) => handleKeyDown(e, "page3")}
                        role="button"
                        tabIndex="0"
                      >
                        <span className="nav-pages-t">Page 3</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>{renderPage()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
