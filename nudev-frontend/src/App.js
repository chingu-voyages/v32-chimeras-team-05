import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Resources from "./pages/Resources";
import Team from "./pages/Team";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/login" component={AuthPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
