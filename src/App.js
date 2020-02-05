import React, { Component } from "react";
import {Route, Switch } from "react-router-dom";
import Shipments from "./containers/ShipmentsList";
import { ShipmentDetails } from "./containers/ShipmentDetails/";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Shipments} />
                <Route exact path="/shipments/:id/details" component={ShipmentDetails} />
            </Switch>
        );
    }
}

export default App;
