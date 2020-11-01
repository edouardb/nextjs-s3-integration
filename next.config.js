const webpack = require("webpack");

module.exports = {
  rewrites() {
    return [
      {
        source: "/objects/:key",
        destination: "/api/objects/:key",
      },
    ];
  },
};
