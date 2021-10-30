import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./routes/Home";

import OrgSignUp from "./routes/OrgSignUp";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home/>
        </Route>
        <Route exact path={"/org/signup"}>
          <OrgSignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
