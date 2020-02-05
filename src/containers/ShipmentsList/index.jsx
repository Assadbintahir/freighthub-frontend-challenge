import React, { Component } from "react";
import Container from '../../components/Container';
import Segment from '../../components/Segment';
import Item from '../../components/Item';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';

import { ShipmentItem } from '../../components/ShipmentItem';
import { SearchAndSort } from '../../components/Search&Sort';
import { fetchShipments, fetchOneShipment, fetchSortedShipments } from "../../services/shipments";

class Shipments extends Component {
    constructor() {
        super();
        this.state = { shipments: [], pageInfo: {}, enteredID: ''};
    }
    componentDidMount() {
        this.loadShipments();
    }

    async loadShipments(activePage = 1) {
            const { data, pageInfo } = await fetchShipments(activePage);
            this.setState({ shipments: data , pageInfo });
    }

    handlePagination = (event, data) => {
        this.loadShipments(data.activePage);
    };

    searchTextChange = (event, data) => {
        this.setState({ enteredID: data.value});
    };

    handleSearch = async () => {
            if(this.state.enteredID) {
                const shipment = await fetchOneShipment(this.state.enteredID);
                if(shipment) {
                    this.setState({ shipments: [shipment] });
                }
            }
    };

    handleSort = async (event, data) => {
            const [order, field] = data.value.split('_');
            const { data: shipments, pageInfo } = await fetchSortedShipments(field, order);
            this.setState({ shipments, pageInfo });
    };

    render() {
        const { shipments, pageInfo } = this.state;
        console.log(shipments);
        if(shipments.length) {
            return (
                <Container text>
                    <Segment.Group>
                        <Segment>
                            <SearchAndSort
                                searchTextChange={this.searchTextChange}
                                handleSearch={this.handleSearch}
                                handleSort={this.handleSort}
                            />
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