const AlbumsHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const albumHandler = new AlbumsHandler(service, validator);
    server.route(routes(albumHandler));
  },
};