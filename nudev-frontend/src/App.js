import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { routesList } from "./helpers/urlLinks";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Switch>
          {Object.values(routesList).map(({ id, path, componentName }) => (
            <Route exact key={id} path={path} component={componentName} />
          ))}
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
