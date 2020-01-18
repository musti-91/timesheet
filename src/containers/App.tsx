import React, { FC } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import NotFound from "../components/NotFound";
import history from "../utils/history";
import Add from "./Add";
import Provider from "./Context";
import DayView from "./DayView";
import Month from "./Month";

interface Props {}

/**
 * @author
 * @function @App
 **/

const App: FC<Props> = props => {
  return (
    <div className="container">
      <Provider>
        <Router history={history}>
          <Switch>
            <Route exact path={"/"}>
              <Month />
            </Route>
            <Route path={"/new/:id"}>
              <Add />
            </Route>
            <Route path={"/modify/:id"}>
              <Add />
            </Route>
            <Route path={`/view/:id`}>
              <DayView />
            </Route>
            <Redirect to={`/not-found`}>
              <NotFound />
            </Redirect>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
