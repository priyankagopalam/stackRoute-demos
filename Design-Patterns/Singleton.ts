class ConfigurationManager {
    private static instance: ConfigurationManager;
    private config: Record<string, any>;

    public constructor() {
        this.config = {
            apikey: "kjsdghf833745890",
            environment: "production",
            maxConnections: 10
        }
    }

    public static getInstance(): ConfigurationManager {
        if (!ConfigurationManager.instance) {
            ConfigurationManager.instance = new ConfigurationManager();
        }
        return ConfigurationManager.instance;
    }

    public getConfig(key: string): any {
        return this.config[key];
    }

    public setConfig(key: string, value: any): void {
        this.config[key] = value;
    }

}


const configManager = ConfigurationManager.getInstance(); // Since no instance exists it will create new instance
const configManager2 = ConfigurationManager.getInstance(); // Since the instance already exists it return same instance

// Cross checking the instance
console.log(configManager === configManager2);

// Using the instance to get the configuration settings`
console.log("Api Key", configManager.getConfig("apikey"));

// Using the instance to update the configuration setting
configManager.setConfig("maxConnections", 20);
console.log("Max Connections", configManager.getConfig("maxConnections"));