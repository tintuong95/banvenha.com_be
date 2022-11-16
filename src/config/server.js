

const {PORT=4000}=process.env

module.exports = function startServer(server) {
    server.listen(PORT, () => {
      console.log("Connection success  ", PORT);
    });
}