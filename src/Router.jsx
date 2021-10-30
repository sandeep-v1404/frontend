import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

import OrgSignUp from "./routes/OrgSignUp";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <h1>replace with HOMEPAGE component</h1>
        </Route>
        <Route exact path={"/org/signup"}>
          <OrgSignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
