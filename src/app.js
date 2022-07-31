import React from "react";
import * as Routes from "./constants/routes";
import * as Pages from "./pages";

import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import favicon from "./assets/favicon.ico";

const App = () => {
  return(
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>

      <Router>
        <Switch>
          <Route exact path={Routes.Home} element={<Pages.Home/>}/>
          <Route path={Routes.NotFound} element={<Pages.NotFound/>}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
