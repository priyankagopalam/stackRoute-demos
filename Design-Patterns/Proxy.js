var MainDatabaseQuery = /** @class */ (function () {
    function MainDatabaseQuery() {
    }
    MainDatabaseQuery.prototype.executeQuery = function (query) {
        console.log("Executing query: ".concat(query));
        console.log("Query Executed Successfully");
    };
    return MainDatabaseQuery;
}());
var AccessControlProxy = /** @class */ (function () {
    function AccessControlProxy(userRole) {
        this.mainDatabaseQuery = new MainDatabaseQuery();
        this.userRole = userRole;
    }
    AccessControlProxy.prototype.executeQuery = function (query) {
        if (this.userRole === "Admin") {
            console.log("Access granted. Executing query....");
            this.mainDatabaseQuery.executeQuery(query);
        }
        else {
            console.log("Access denied. You do not have permission to execute this query");
        }
    };
    return AccessControlProxy;
}());
var adminQuerySystem = new AccessControlProxy("Admin");
var userQuerySystem = new AccessControlProxy("User");
console.log("Admin attempting to execute the query");
adminQuerySystem.executeQuery("Select * From Users");
console.log("User attempting to execute the query");
userQuerySystem.executeQuery("Select * From Users");
