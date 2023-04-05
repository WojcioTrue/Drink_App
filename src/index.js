import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextComponent from "./context/ContextComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<Index />);

function Index() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ContextComponent>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextComponent>
      </Provider>
    </React.StrictMode>
  );
}

export default Index;
