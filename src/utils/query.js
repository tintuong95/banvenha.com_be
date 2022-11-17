function queryHandler(req) {
    const newQuery = {...req.query };
    let { perPage = 10, page = 1, sort = "DESC" } = newQuery;
    delete newQuery.perPage;
    delete newQuery.page;
    delete newQuery.sort;

    return {
        where: {...newQuery },
        order: [
            ["updatedAt", sort]
        ],
        limit: Number(perPage),
        offset: Number(perPage) * Number(page) - Number(perPage),
        perPage: Number(perPage),
        page: Number(page),
    };;
};



module.exports = {
    queryHandler,
};