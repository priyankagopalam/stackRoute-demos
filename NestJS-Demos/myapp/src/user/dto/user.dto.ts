import { IsNotEmpty, IsEmail, MaxLength, MinLength, IsNumber } from "class-validator";
export class UserDto{
    @IsNotEmpty()
    @IsNumber()
    _id: number;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    firstname: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    lastname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;
}