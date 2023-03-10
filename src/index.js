import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextComponent from "./context/ContextComponent";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<Index />);

function Index() {
  return (
    <React.StrictMode>
      <ContextComponent>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextComponent>
    </React.StrictMode>
  );
}

export default Index;
