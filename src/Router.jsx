import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OrgSignUp from "./routes/OrgSignUp";
import Dashboard from "./routes/Dashboard";
import Marketplace from "./routes/Marketplace";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <h1>replace with HOMEPAGE component</h1>
        </Route>
        <Route exact path={"/marketplace"}>
          <Marketplace />
        </Route>
        <Route exact path={"/org/signup"}>
          <OrgSignUp />
        </Route>
        <Route exact path={"/org/dashboard"}>
          <Dashboard />
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
