//importation des packages
import { Switch, Route } from "react-router";

//importation des pages 
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ContactList from "./Pages/ContactList/ContactList";
import Add from "./Pages/Add/Add";
import Errors from "./Pages/Errors/Errors";

//importation de CSS
import "./App.css";


function App() {
  return (
    <div className = "app">
      <Navbar />
      <Home />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit"]} component={Add} />
        <Route path="/*" component={Errors} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
