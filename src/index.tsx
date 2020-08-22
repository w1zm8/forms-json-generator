import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { FormConfigProvider } from "./contexts/FormConfigContext";
import formConfigReducer, { initialState } from "./reducers/formConfigReducer";

ReactDOM.render(
  <React.StrictMode>
    <FormConfigProvider reducer={formConfigReducer} initialState={initialState}>
      <App />
    </FormConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
