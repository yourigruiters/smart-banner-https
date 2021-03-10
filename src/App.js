import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    console.log("Listening for beforeinstallprompt...");
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("Heard beforeinstallprompt, trying to setup..");
      e.preventDefault(); // Test this on/off - When disabled it should show the mini-info bar
      setPrompt(e);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", () => {
        console.log("Removed eventlistener");
      });
    };
  }, []);

  useEffect(() => {
    if (prompt) {
      openPrompt();
    }
  }, [prompt]);

  const openPrompt = () => {
    if (!prompt) {
      return;
    }

    // Show the prompt
    prompt.prompt();
    // Wait for the user to respond to the prompt
    prompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      setPrompt(null);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Version: 1.06 - Auto open prompt</p>
        {prompt && <button onClick={openPrompt}>Open the prompt</button>}
      </header>
    </div>
  );
};

export default App;
