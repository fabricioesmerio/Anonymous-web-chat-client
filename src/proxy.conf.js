const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:7204",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
