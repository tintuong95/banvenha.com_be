

module.exports = function pagination(data, perPage,currentPage) {
  return {
    currentPage,
    data: data.rows,
    from: currentPage * perPage - perPage + 1,
    to: currentPage * perPage,
    lastPage: Math.ceil(Number(data.count / perPage)),
    perPage,
    total: data.count,
  };
};