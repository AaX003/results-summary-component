import { useState } from 'react'
import '../css/App.css'

// svgs
import reaction from "../assets/icon-reaction.svg";
import memory from "../assets/icon-memory.svg";
import verbal from "../assets/icon-verbal.svg";
import visual from "../assets/icon-visual.svg";

function App() {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="container">
      <div className="grid-layout">
        {!showSummary && (
          <div className="results-layout">
            <h1 className="results-title">
              Your Result
            </h1>
            <span className="bg-grad">
              <h2 className="results-value-larger">
                76
              </h2>
              <h3 className="results-value-smaller">
                of 100
              </h3>
            </span>
            
            <p className="results-status">
              Great
            </p>
            <p className="results-subtitle">
              You scored higher than 65% of 
              the people who have taken these 
              tests.
            </p>
            <button 
              className="open-summary-btn"
              onClick={() => setShowSummary(true)}
            >
              Show Summary 
            </button>
          </div>
        )}
        {showSummary && (
          <div className="summary-layout">
            <h1 className="summary-title">
              Summary
            </h1>
            <ul className="summary-status">
              {/* reaction */}
              <li className="summary-status-reaction">
                <span className="icon">
                  <img src={reaction} alt="icon"/>
                </span>
                <p className="text">Reaction</p>
                <span className="reaction-value">
                  <small className="bolder">80</small>
                  <small className="grey"> / 100</small>
                </span>
              </li>
              {/* memory */}
              <li className="summary-status-memory">
                <span className="icon">
                  <img src={memory} alt="icon"/>
                </span>
                <p className="text">Memory</p>
                <span className="reaction-value">
                  <small className="bolder">92</small>
                  <small className="grey"> / 100</small>
                </span>
              </li>
              {/* verbal */}
              <li className="summary-status-verbal">
                <span className="icon">
                  <img src={verbal} alt="icon"/>
                </span>
                <p className="text">Verbal</p>
                <span className="verbal-value">
                  <small className="bolder">61</small>
                  <small className="grey"> / 100</small>
                </span>
              </li>
              {/* visual */}
              <li className="summary-status-visual">
                <span className="icon">
                  <img src={visual} alt="icon"/>
                </span>
                <p className="text">Visual</p>
                <span className="visual-value">
                  <small className="bolder">73</small>
                  <small className="grey"> / 100</small>
                </span>
              </li>
            </ul>
           
            <button 
              className="close-summary-btn"
              onClick={() => setShowSummary(false)}
            >
              Close Summary 
            </button>
          </div>
        )}
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/AaX003" target="_blank" rel="noopener noreferrer">AXACODES</a>.
    </div>
    </div>
  )
}

export default App
