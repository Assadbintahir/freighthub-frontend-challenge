export default (data) => {
    let arrData = data.split("link:");
    data = arrData.length === 2 ? arrData[1] : data;
    let parsed_data = {};
    arrData = data.split(",");
    for (let d of arrData) {
        const linkInfo = /<([^>]+)>;\s+rel="([^"]+)"/ig.exec(d);
        parsed_data[linkInfo[2]]=linkInfo[1];
    }
    return parsed_data;
}