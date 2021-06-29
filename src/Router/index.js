import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "../pages/Home"
import LandingPage from "../pages/LandingPage"

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
