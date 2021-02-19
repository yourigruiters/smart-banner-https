import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [asked, setAsked] = useState(false);

  useEffect(() => {
    console.log("Listening for beforeinstallprompt...");
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("Heard beforeinstallprompt, trying to setup...");
      e.preventDefault(); // Test this on/off - When disabled it should show the mini-info bar
      setAsked(true);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", () => {
        console.log("Removed eventlistener");
      });
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {asked && <div>OLEEEEEEE</div>}
      </header>
    </div>
  );
};

export default App;
