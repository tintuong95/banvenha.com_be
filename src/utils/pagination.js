function pagination(req, data, currentPage, perPage) {
    const totalPage = Math.ceil(Number(data.count / perPage));
    const { currentLink, previousLink, nextLink, links } = paginationLinks(
        req,
        data,
        currentPage,
        perPage
    );
    if (currentPage > totalPage) {
        return null;
    }
    return {
        currentPage,
        data: data.rows,
        from: currentPage * perPage - perPage + 1,
        to: currentPage * perPage - perPage + data.rows.length,
        lastPage: totalPage,
        perPage,
        total: data.count,
        currentLink,
        previousLink,
        nextLink,
        links,
    };
}

function paginationLinks(req, data, currentPage, perPage) {
    const { count, rows } = data;
    let links = [];
    const url = getUrlRequest(req);
    const totalPage = Math.ceil(Number(count / perPage));
   
    const nextLink =
        currentPage < totalPage ?
        url + "?" + mapQuery(req.query, currentPage + 1) :
        url + "?" + mapQuery(req.query, currentPage);
    const previousLink =
        currentPage - 1 > 0 ?
        url + "?" + mapQuery(req.query, currentPage - 1) :
        url + "?" + mapQuery(req.query, currentPage);

    for (i = 1; i <= totalPage; i++) {
        links.push(url + "?" + mapQuery(req.query, i));
    }
    return {
        nextLink: nextLink,
        links,
        previousLink: previousLink,
        currentLink: url + "?" + mapQuery(req.query, currentPage),
    };
}

function getUrlRequest(req) {
    const protocol = req.protocol;
    const host = req.headers.host;
    const baseUrl = req.baseUrl;
    return protocol + "://" + host + baseUrl;
}

function mapQuery(query, page) {
    return Object.entries(query)
        .map((item) => {
            if (item[0] === "page") {
                item[1] = page;
            }
            return `${item[0]}=${item[1]}`;
        })
        .join("&");
}


module.exports = {
    pagination,
    paginationLinks,
};