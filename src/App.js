import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./utils/history";
function App() {
  const [i, setI] = useState(0),
    [isActive, setActive] = useState(false);

  //Define router below the nav
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Nav i={i} setI={setI} isActive={isActive} setActive={setActive} />
      <Router history={history}>
      <Switch>
          <Route path={"/home"} component={HomePage} />
          <Route path={"/contact"} component={ContactPage} />
          <Route render={() => <Redirect to={`/home`} />} />

          </Switch>
          </Router>
      <Footer />
    </div>
  );
}

export default App;
