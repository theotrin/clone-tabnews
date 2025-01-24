module.exports = {
  target: "webworker",
  entry: "./index.js",
  externals: [
    "child_process",
    "dns",
    "fs",
    "net",
    "tls",
  ]
}