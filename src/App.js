import "./App.css";
import React, { useState } from "react";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#4f6571";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
                toggleMode={toggleMode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
