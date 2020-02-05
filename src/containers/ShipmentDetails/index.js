import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import Item from "../../components/Item";
import Container from '../../components/Container';
import Segment from '../../components/Segment';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import { fetchOneShipment } from '../../services/shipments';
import Icon from "../../components/Icon";

export class ShipmentDetails extends Component {
    constructor(props) {
        super();
        console.log(props);
        this.state = {};
        this.state = { shipment: props.location.data };
    }

    componentDidMount() {
        const { props } = this;
        if(!props.location.data) {
            this.loadShipments(props.match.params.id);
        }
    }

    async loadShipments(id) {
        const shipment = await fetchOneShipment(id);
        console.log(shipment)
        this.setState({ shipment });
    }

    render() {
        const { shipment } = this.state;
        console.log()
        if (!shipment) {
            return <Loader active inline='centered' />
        }
        return (
            <Container text>
                <Segment.Group>
                    <Segment>
                        <Button size={'tiny'} basic>
                            <Link to={{pathname: `/`}}>
                                All Shipments
                            </Link>
                        </Button>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header>{shipment.name}</Item.Header>
                                    <Item.Description>
                                        {`${shipment.origin} - ${shipment.destination}`}
                                    </Item.Description>
                                    <Item.Meta>Shipment ID: {shipment.id}</Item.Meta>
                                    <Item.Extra>
                                        <Item.Meta>Mode: {shipment.mode}</Item.Meta>
                                        <Item.Meta>Status: {shipment.status}</Item.Meta>
                                        <Item.Meta>Type: {shipment.type}</Item.Meta>
                                        <Item.Meta>Total: {shipment.total}</Item.Meta>
                                        <Item.Meta>UserID: {shipment.userId}</Item.Meta>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                    <Segment>
                        <Item>
                            <Header as='h4'>Cargo Information</Header>
                            {
                                shipment.cargo &&
                                shipment.cargo.map((item, idx) => (
                                    // although index as key is not recommended, but no unique identifier is present in cargo.
                                    <div key={idx}>
                                        <Item.Description>Type: {item.type}</Item.Description>
                                        <Item.Description>{item.description}</Item.Description>
                                        <Item.Meta>Volume: {item.volume}</Item.Meta>
                                        {(shipment.cargo.length - 1) !== idx && <Divider /> }
                                    </div>
                                ))
                            }
                            <Header as='h4'>Services Information</Header>
                            {
                                shipment.services &&
                                shipment.services.map((item, idx) => (
                                    // although index as key is not recommended, but no unique identifier is present in services.
                                    <div key={idx}>
                                        <Item.Header>Type: {item.type}</Item.Header>
                                        {item.value && <Item.Description>Value: {item.value}</Item.Description>}
                                        {(shipment.services.length - 1) !== idx && <Divider /> }
                                    </div>
                                ))
                            }
                        </Item>
                    </Segment>
                </Segment.Group>
            </Container>
        )
    }
};