import logo from "./logo.svg";
import "./App.css";
import WellCome from "./component/Demo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WellCome2 from "./component/Demo2";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/page_1" component={WellCome} />
        <Route exact path="/page_2" component={WellCome2} />
      </Switch>
    </Router>
  );
}

export default App;
