import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Item from "../Item";
import Button from "../Button";
import Icon from "../Icon";

export class ShipmentItem extends Component {
    render() {
        const { shipment } = this.props;
        return (
            <Item>
                <Item.Content>
                    <Item.Header>{shipment.name}</Item.Header>
                    <Item.Description>
                        <span>{`${shipment.origin} - ${shipment.destination}`}</span>
                    </Item.Description>
                    <Item.Extra>
                        <Button size={'mini'} floated='right'>
                            <Link to={{
                                pathname: `/shipments/${shipment.id}/details`,
                                data: shipment
                            }}>
                            Info
                            <Icon name='arrow circle right' />
                            </Link>
                        </Button>
                        <Item.Meta>Mode: {shipment.mode}</Item.Meta>
                        <Item.Meta>Status: {shipment.status}</Item.Meta>
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    }
};