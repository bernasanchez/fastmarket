import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import moduleName from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={ItemListContainer}></Route>

          <Route exact path="/category/:categoryId" component={ItemListContainer}></Route>

          <Route path="/item/:id" component={ItemDetailContainer}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
