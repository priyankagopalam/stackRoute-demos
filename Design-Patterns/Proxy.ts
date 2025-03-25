interface DatabaseQuery {
    executeQuery(query: string): void;
}

class MainDatabaseQuery implements DatabaseQuery {
    public executeQuery(query: string): void {
        console.log(`Executing query: ${query}`);
        console.log("Query Executed Successfully");
    }
}

class AccessControlProxy implements DatabaseQuery {
    private mainDatabaseQuery: MainDatabaseQuery;
    private userRole: string;

    constructor(userRole: string) {
        this.mainDatabaseQuery = new MainDatabaseQuery();
        this.userRole = userRole;
    }

    public executeQuery(query: string): void {
        if (this.userRole === "Admin") {
            console.log("Access granted. Executing query....");
            this.mainDatabaseQuery.executeQuery(query);
        }else{
            console.log("Access denied. You do not have permission to execute this query");
        }
    }
}

const adminQuerySystem = new AccessControlProxy("Admin");
const userQuerySystem = new AccessControlProxy("User");

console.log("Admin attempting to execute the query");
adminQuerySystem.executeQuery("Select * From Users");

console.log("User attempting to execute the query");
userQuerySystem.executeQuery("Select * From Users");