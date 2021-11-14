import React, { lazy, Suspense,createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Loading from './Component/CommonComponent/Loading/Loading';
const Login = lazy(() => import('./Component/Login/Login'));
const PricePlans = lazy(() => import('./Component/PricePlans/PricePlans'));
const MyOrders = lazy(()=>import('./Component/MyOrders/MyOrders'))
const PrivateRoute = lazy(()=>import('./Component/Login/PrivateRoute/PrivateRoute'))
const PersonalForm = lazy(()=>import('./Component/PaymentProcess/PersonalForm/PersonalForm'))
const AllClasses = lazy(()=> import('./Component/OurClasses/AllClasses/AllClasses'))
const OurClasses = lazy(()=> import('./Component/OurClasses/OurClasses'))
const Home = lazy(()=> import('./Component/Home/Home'))
const NotFound = lazy(()=> import('./Component/NotFound/NotFound'))
export const UserContext = createContext()
function App() {
  const [userData, setUserData] = useState({})
  return (
    <Suspense fallback={<Loading/>}>
    <UserContext.Provider value={[userData, setUserData]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
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
    </Suspense>
  );
}

export default App;
