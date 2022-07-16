import React from "react";
import "../css/App.css";
import Header from "./Header";
import Rank from "./rank/Ranks";
import Practice from "./practice/Practice";
import Instructions from "./practice/Instructions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header  */}
        <Header />
        <Routes>
          <Route path="/" element={<Instructions />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/rank/:score" element={<Rank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
