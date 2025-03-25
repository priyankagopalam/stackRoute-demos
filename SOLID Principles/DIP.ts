// class SQLDatabase{
//     connect(): void{
//         console.log("Connected to DB");
//     }
// }

// class UserService{
//     private db = new SQLDatabase();

//     getUser(): void{
//         this.db.connect();
//         console.log("Displaying Users");
//     }
// }

interface Database{
    connect(): void;
}

class SQLDatabase implements Database{
    connect(): void {
        console.log("Connected to SQL DB");
    }
}

class MongoDatabase implements Database{
    connect(): void {
        console.log("Connected to MongoDB");
    }
}

class UserService{
    constructor(private db: Database){}

    getUser(): void{
        console.log("Fetching User");
    }
}

//Resolve dependency
const db: Database = new MongoDatabase();
const userService = new UserService(db);
userService.getUser();
