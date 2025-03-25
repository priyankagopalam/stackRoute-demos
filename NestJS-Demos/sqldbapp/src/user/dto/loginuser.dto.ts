import { IsNotEmpty, IsEmail } from "class-validator";
export class loginuserDto{
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsEmail()
    password: string;
}