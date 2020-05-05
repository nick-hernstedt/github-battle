import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";

// Componenet
// State
// Lifecycle
// UI

class App extends React.Component {
  render() {
    return (
      <div>
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(
  // React Element
  <App />,
  // Where to render the Element to
  document.getElementById("app")
);
