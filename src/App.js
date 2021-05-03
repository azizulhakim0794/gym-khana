import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import Home from './Component/Home/Home';
import Header from './Component/Home/Header/Header';
import OurClasses from './Component/OurClasses/OurClasses';
import AllClasses from './Component/OurClasses/AllClasses/AllClasses';
import PricePlans from './Component/PricePlans/PricePlans';
import PersonalForm from './Component/PaymentProcess/PersonalForm/PersonalForm';
import { createContext, useState } from 'react';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Component/MyOrders/MyOrders';
export const UserContext = createContext()
function App() {
  const [userData, setUserData] = useState({})
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/ourClasses">
            <OurClasses />
          </Route>
          <Route path="/myOrders">
            <MyOrders />
          </Route>
          <Route path="/ourClass/:id">
            <AllClasses />
          </Route>
          <Route path="/pricePlans">
            <PricePlans />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/personalInfo/:id">
            <PersonalForm />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
