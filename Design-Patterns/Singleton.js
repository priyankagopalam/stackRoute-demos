var ConfigurationManager = /** @class */ (function () {
    function ConfigurationManager() {
        this.config = {
            apikey: "kjsdghf833745890",
            environment: "production",
            maxConnections: 10
        };
    }
    ConfigurationManager.getInstance = function () {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    };
    ConfigurationManager.prototype.getConfig = function (key) {
        return this.config[key];
    };
    ConfigurationManager.prototype.setConfig = function (key, value) {
        this.config[key] = value;
    };
    return ConfigurationManager;
}());
var configManager = ConfigurationManager.getInstance();
var configManager2 = ConfigurationManager.getInstance();
// Cross checking the instance
console.log(configManager === configManager2);
// Using the instance to get the configuration settings`
console.log("Api Key", configManager.getConfig("apikey"));
// Using the instance to update the configuration setting
configManager.setConfig("maxConnections", 20);
console.log("Max Connections", configManager.getConfig("maxConnections"));
