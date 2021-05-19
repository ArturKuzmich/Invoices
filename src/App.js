import './App.scss';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
     <div className="invoice_content">
         <Home />
     </div>
    </div>
  );
}

export default App;
