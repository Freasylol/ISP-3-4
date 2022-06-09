import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Admin from './pages/Admin';
import DashBoard from './pages/DashBoard';
import Shop from './pages/Shop'
import {Context} from './index'
import CartPage from './pages/CartPage'
 
function App() {
  const {user} = useContext(Context)

  return (
    <div className="App">
      <DashBoard />
      <Router>
          <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/cart" exact component={CartPage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;