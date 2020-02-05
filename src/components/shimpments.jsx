import React, { Component } from "react";
import { fetchShipments } from "../services/shipments";

class Shipments extends Component {
    constructor() {
        super();
        this.state = { shipments: [], pageInfo: {} };
    }
    async componentDidMount() {
        const { data, pageInfo } = await fetchShipments();
        this.setState({ shipments: data, pageInfo });
    }

    render() {
        const { shipments, pageInfo } = this.state;
        if(shipments.length) {
            return <div>{shipments[0].name}</div>;
        } else {
            return <div>Loading. . .</div>
        }
    }
}
export default Shipments