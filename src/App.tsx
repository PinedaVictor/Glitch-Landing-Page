import React from "react";
import "./styles/App.scss";
import "./styles/resp.scss";
import { Home } from "./pages/Home";

export const App: React.FC = () => {
  return (
    <div id="siteContainer">
      <Home />
    </div>
  );
};

export default App;
