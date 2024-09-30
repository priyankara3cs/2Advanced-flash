import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./components/Home";
import "./App.css";
import Test from "./components/test";
import Test2 from "./components/inner-pages/i-page-3";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Update progress from 0 to 100%
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return oldProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <div className="circle-container">
            <div className="circle">
              <div className="wave"></div>
            </div>
            <div className="percentage">{progress}%</div>
          </div>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<Test2 />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
