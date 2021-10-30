import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

import OrgSignUp from "./routes/OrgSignUp";
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default Router;
