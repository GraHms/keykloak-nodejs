var session = require("express-session");
var keycloak = require("keycloak-connect");
const chalk = require("chalk");

 

// let keycloak;

 

var keycloakConfig = {
    "realm": "NodeJS",
    "bearer-only": true,
    "auth-server-url": "http://localhost:8080/auth/",
    "ssl-required": "external",
    "resource": "node_client",
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    "confidential-port": 0
  };

 


function initKeycloak() {
    if (keycloak) {
        console.log("Returning existing Keycloak instance!");
        return keycloak;
      }
    else{
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        keycloak = new keycloak({
            store: memoryStore,
            secret: "any_key",
            resave: false,
            saveUninitialized: true
        },  keycloakConfig);
        return keycloak;
      }
  }

 

module.exports = {
    initKeycloak
};