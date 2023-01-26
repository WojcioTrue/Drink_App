import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<Index />);

function Index() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default Index;
