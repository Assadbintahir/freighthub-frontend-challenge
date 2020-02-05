import parseLinkHeader from "../Utils/parseLinkHeader";

export const fetchShipments = async () => {
    const result = {};
    const shipments = await fetch('/shipments?_page=1').then(res => {
        result.pageInfo = parseLinkHeader(res.headers.get('Link'));
        return res.json();
    });
    result.data = shipments;
    return result;
}