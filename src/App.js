import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", () => {});

    return () => {
      window.removeEventListener("beforeinstallprompt", () => {});
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Version: 2.03 - Automatic banner - No code magic</p>
      </header>
    </div>
  );
};

export default App;
