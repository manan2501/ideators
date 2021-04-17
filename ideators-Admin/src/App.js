import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Page
import Login from "./componets/auth/Login";
import Dashboard from "./componets/dashboard/Dashboard";
// Redux
import { loadUser } from "./redux/actions/auth";
import { getCurrentProfile } from "./redux/actions/profile";
import setAuthToken from "./redux/setAuthToken";
import store from "./redux/store";
import { Provider } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import Desks from "./componets/dashboard/desks/Desks";
import Profiles from "./componets/dashboard/profiles/Profiles";
import { getDesk } from "./redux/actions/desk";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <PrivateRoute
              exact
              path="/dashboard"
              component={Dashboard}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/dashboard/profiles"
              component={Profiles}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/dashboard/desks"
              component={Desks}
            ></PrivateRoute>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
