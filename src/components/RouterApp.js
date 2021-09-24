import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LoginComponent } from './auth/LoginComponent';
import { RegisterComponent } from './auth/RegisterComponent';
import { DashBoardComponent } from './dashboard/DashBoardComponent';


import "../styles/styles.css"

export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/register" component={RegisterComponent}/>
                <Route path="/" component={DashBoardComponent}/>
            </Switch>
        </Router>
    )
}
