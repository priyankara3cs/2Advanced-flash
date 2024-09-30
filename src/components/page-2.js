import React from "react";
import "./page-2.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src="/images/img_1.jpg" alt="Dragon 1" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src="/images/img_2.jpg" alt="Dragon 2" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src="/images/img_3.jpg" alt="Dragon 3" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src="/images/img_4.jpg" alt="Dragon 4" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src="/images/img_5.jpg" alt="Dragon 5" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src="/images/img_6.jpg" alt="Dragon 6" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src="/images/img_7.jpg" alt="Dragon 7" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src="/images/img_8.avif" alt="Dragon 8" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src="/images/img_9.webp" alt="Dragon 9" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src="/images/img_10.jpg" alt="Dragon 10" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="3CS">3CS</h1>
        <div className="author">
          <h2>3CS DEV</h2>
          <p>
            <b>Web Design</b>
          </p>
          <p>Subscribe to the channel</p>
        </div>
        <div className="model"></div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div style={{ padding: "10px" }} className="foo">
      <Banner />
    </div>
  );
}

export default App;
