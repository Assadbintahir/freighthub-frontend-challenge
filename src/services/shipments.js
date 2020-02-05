import parseLinkHeader from "../Utils/parseLinkHeader";

// Error boundaries are not implemented since it was out of the scope and could take much time.
export const fetchShipments = async (activePage) => {
    const result = {};
    const shipments = await fetch(`/shipments?_page=${activePage}&_limit=20`).then(res => {
        if(res.headers.get('Link')) {
            result.pageInfo = parseLinkHeader(res.headers.get('Link'));
        }
        if(res.statusText === 'OK')  return res.json();
    });
    result.data = shipments;
    return result;
};

export const fetchOneShipment = async (id) => {
    const shipment = await fetch(`/shipments/${id}`).then(res => {
        if(res.statusText === 'OK') return res.json();
    });
    return shipment
};

export const fetchSortedShipments = async (field, order) => {
    const result = {};
    const shipments = await fetch(`/shipments?_sort=${field}&_order=${order}`).then(res => {
        if (res.statusText === 'OK') return res.json();
    });
    result.data = shipments;
    return result;
};

export const updateShipmentName = async (id, name) => {
    const shipments = await fetch(
        `/shipments/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, name })
        }).then(res => {
        if (res.statusText === 'OK') return res.json();
    });
    return shipments;
};