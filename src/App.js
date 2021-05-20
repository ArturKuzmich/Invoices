import './App.scss';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateInvoice from "./components/CreateInvoice/CreateInvoices";
import InvoiceDetails from "./components/InvoiceDetails/InvoiceDetails";

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
                      <Route path="/invoice/:id">
                          <InvoiceDetails />
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
