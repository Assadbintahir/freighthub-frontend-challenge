import parseLinkHeader from "../Utils/parseLinkHeader";

export const fetchShipments = async (activePage) => {
    const result = {};
    const shipments = await fetch(`/shipments?_page=${activePage}&_limit=20`).then(res => {
        if(res.headers.get('Link')) {
            result.pageInfo = parseLinkHeader(res.headers.get('Link'));
        }
        return res.json();
    });
    result.data = shipments;
    return result;
}