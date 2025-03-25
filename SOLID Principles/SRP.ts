// Violating the SRP rule because this class is performing multiple tasks
class User {
    saveInfoToDatabase(): void {
        console.log('USer information saved to database');
    }
    sendEmail(message: string): void {
        console.log('Mail sent to ' + message);
    }
}

// Lets break down the code to follow SRP
class User1 {
    constructor(public name: string, public email: string) { }
}

class UserRepository{
    saveInfoToDatabase(user: User1){
        console.log('User information saved to database');
    }
}

class EmailService{
    sendMail(user: User1, message: string): void{
        console.log(`Mail sent to ${user}`);
    }
}


