import { IsNotEmpty, IsEmail } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    _id: string;
    
    @IsNotEmpty()
    firstname: string;
    
    @IsNotEmpty()
    lastname: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;
    
    @IsNotEmpty()
    city: string;
    
    @IsNotEmpty()
    age: number;
}