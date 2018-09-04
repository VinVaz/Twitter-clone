module.exports = {
  verbose: true,
  snapshotSerializers: ["enzyme-to-json/serializer"]
  setupFiles: ["./test/jestsetup.js"],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy"
  },
};
