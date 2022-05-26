import './App.css';
import { Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/LandingPage";
import Details from "./components/Details.jsx";
import CreateActivity from "./components/CreateActivity.jsx"


function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/:id" component={Details}/>
        <Route exact path="/create" component={CreateActivity}/>
      </Switch>
    </div>
  );
}

export default App;
