import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  // const [prompt, setPrompt] = useState(null);

  // const openPrompt = () => {
  //   if (!prompt) {
  //     return;
  //   }

  //   // Show the prompt
  //   prompt.prompt();

  //   prompt.userChoice.then((choiceResult) => {
  //     // console.log(choiceResult) not handling result currently
  //     setPrompt(null);
  //   });
  // };
  // console.log(openPrompt);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("Automatic magic");
      // setPrompt(e);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", () => {
        // setPrompt(null);
      });
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Version: 2.02 - Final implementation for automatic banner</p>
        {/* {prompt && <button onClick={openPrompt}>Open the prompt</button>} */}
      </header>
    </div>
  );
};

export default App;
