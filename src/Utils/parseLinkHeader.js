export default (data) => {
    let arrData = data.split("link:");
    data = arrData.length === 2 ? arrData[1] : data;
    let parsed_data = {};
    arrData = data.split(",");
    for (let d of arrData) {
        const linkInfo = /<([^>]+)>;\s+rel="([^"]+)"/ig.exec(d);
        parsed_data[linkInfo[2]]=linkInfo[1];
    }
    parsed_data.totalPages = getTotalPages(parsed_data.last);
    return parsed_data;
}

const getTotalPages = (lastPage) => {
    const pages = lastPage.split('&')[0];
    return pages.split('=')[1];
}