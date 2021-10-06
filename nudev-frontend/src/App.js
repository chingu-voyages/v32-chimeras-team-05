import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { routesList } from "./helpers/urlLinks";

import { initializeResources } from "./redux/reducers/resourceReducer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeResources());
  }, [dispatch]);

  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Switch>
          {Object.values(routesList).map(
            ({ id, path, relative, componentName }) => (
              <Route
                exact={relative ? false : true}
                key={id}
                path={path}
                component={componentName}
              />
            )
          )}
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
