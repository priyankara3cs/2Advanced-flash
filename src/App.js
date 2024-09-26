import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./components/Home"; // Assuming Gallery is the home component
import "./App.css"; // Include the CSS for the loader
import Test from "./components/test";
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
          setIsLoading(false); // Stop loading once 100% is reached
          return 100;
        }
        return oldProgress + 1;
      });
    }, 30); // Adjust speed of loading (lower value for faster loading)

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
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
