import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Navigation from "./components/layout/Navigation";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Resources from "./pages/Resources";
import Team from "./pages/Team";
import AuthPage from "./pages/AuthPage";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/login" component={AuthPage} />
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
