import React, { Component } from "react";
import {Route, Switch } from "react-router-dom";
import Shipments from "./components/shimpments";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Shipments} />
            </Switch>
        );
    }
}

export default App;
