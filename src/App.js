import './App.scss';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateInvoice from "./components/CreateInvoice/CreateInvoices";

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <div className="app_inner">
                  <Switch>
                      <Route exact path="/">
                          <Home />
                      </Route>
                      <Route path="/create">
                          <CreateInvoice />
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
