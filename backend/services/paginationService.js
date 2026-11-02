const paginateData = (data, limit, offset) => {
    return data.slice(offset, offset + limit);
}

module.exports = {
    paginateData
}
