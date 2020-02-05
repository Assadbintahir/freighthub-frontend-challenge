import React from 'react';
import Item from "../Item";
import Button from "../Button";
import Icon from "../Icon";

export const ShipmentItem = ({ shipment }) => {
    return (
        <Item>
            <Item.Content>
                <Item.Header>{shipment.name}</Item.Header>
                <Item.Description>
                    <span>{`${shipment.origin} - ${shipment.destination}`}</span>
                </Item.Description>
                <Item.Extra>
                    <Button size={'mini'} floated='right'>
                        Info
                        <Icon name='arrow circle right' />
                    </Button>
                    <Item.Meta>Mode: {shipment.mode}</Item.Meta>
                    <Item.Meta>Status: {shipment.status}</Item.Meta>
                </Item.Extra>
            </Item.Content>
        </Item>
    );
};