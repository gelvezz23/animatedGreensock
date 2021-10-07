import React from "react";
import "./App.css";
import LogoCeiba from "./components/logoCeiba";
import ScrollContent from "./components/scrollContent";
//import ScrollContent from "./components/scrollContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoCeiba />
        <ScrollContent />
      </header>
    </div>
  );
}

export default App;
