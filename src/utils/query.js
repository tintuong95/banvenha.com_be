

module.exports = function queryHandler(data) {
    let { perPage = 10, page = 1,sort='DESC' } = data;
    delete data.perPage;
    delete data.page;
    delete data.sort;
    return {
      where: { ...data },
      order: [["updatedAt", sort]],
      limit: Number(perPage),
      offset: Number(perPage) * Number(page) - Number(perPage),
    };
};

