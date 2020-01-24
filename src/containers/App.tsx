import React, { FC } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
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
/**
 ** TODO
 * 1: Responsive: ViewDate,
 * 2: Secure site with auth
 * 3: backend
 * 4: Make description filed table
 * |Ticket Nr|Type| Howlong |Description|
 * Type: Help, Review, Work on
 * HowLong: 30min etc.
 * Description: if there is any.
 */
/**
 *
 * @param props
 */
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
