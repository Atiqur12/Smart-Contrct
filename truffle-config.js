module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
      development: {
          host: "127.0.0.1",
          port: 7545,
          network_id: "5777" // Match any network id
      }
  },
  compilers: {
      solc: {
          // ex:  "0.4.20". (Default: Truffle's installed solc)
          optimizer :{
            enabled : true,
            version: ".5.0",
            runs: 200

          }
      }
  }
};