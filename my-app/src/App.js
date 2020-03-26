import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import OperatorsContainer from "./components/operators/OperatorsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import CheckListContainer from "./components/Check/CheckListContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Route path="/operators" render={() => <OperatorsContainer />} />
        <Route
          path="/checklist/:operatorId"
          render={() => <CheckListContainer />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
