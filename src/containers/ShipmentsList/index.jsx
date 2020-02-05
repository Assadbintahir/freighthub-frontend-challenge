import React, { Component } from "react";
import Container from '../../components/Container';
import Segment from '../../components/Segment';
import Item from '../../components/Item';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';

import { ShipmentItem } from '../../components/ShipmentItem';
import { fetchShipments } from "../../services/shipments";

class Shipments extends Component {
    constructor() {
        super();
        this.state = { shipments: [], pageInfo: {} };
    }
    componentDidMount() {
        this.loadShipments();
    }

    async loadShipments(activePage = 1) {
        const { data, pageInfo } = await fetchShipments(activePage);
        this.setState({ shipments: data, pageInfo });
    }

    handlePagination = (event, data) => {
        console.log(data);
        this.loadShipments(data.activePage);
    };

    render() {
        const { shipments, pageInfo } = this.state;
        if(shipments.length) {
            return (
                <Container text>
                    <Segment.Group>
                        <Segment>
                            <Item.Group divided>
                                {
                                    shipments.map(shipment => (<ShipmentItem key={shipment.id} shipment={shipment} />))
                                }
                            </Item.Group>
                        </Segment>
                        <Segment textAlign='center'>
                            {
                                pageInfo &&
                                <Pagination

                                    defaultActivePage={1}
                                    onPageChange={this.handlePagination}
                                    totalPages={pageInfo.totalPages}
                                />
                            }
                        </Segment>
                    </Segment.Group>
                </Container>
            )
        } else {
            return <Loader active inline='centered' />
        }
    }
}
export default Shipments