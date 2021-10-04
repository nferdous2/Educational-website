import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound'
import Pricing from './Components/Pricing/Pricing';
import { createContext, useState } from 'react';
export const userContext = createContext();
function App() {
  const [user, setUser] = useState({
    name: "Rayan",
  });
  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div >

  );
}

export default App;
