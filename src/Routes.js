import React from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Clinics from "./Pages/Clinics/Clinics";

import Home from './Pages/Home/Home';
import RegisterClinic from './Pages/RegisterClinic/RegisterClinic'


export default function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cadastro-clinica" component={RegisterClinic} />
          <Route exact path="/atualizacao-clinica/:id" component={RegisterClinic} />
          <Route exact path="/clinicas" component={Clinics}/>
          <Route exact path="*" component={Home} />
        </Switch>
        <Toaster position="top-center" reverseOrder={false} />
      </Router> 
    );
};