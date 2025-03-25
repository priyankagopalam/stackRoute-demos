import { Injectable } from "@nestjs/common";
import { ThrottlerGuard } from "@nestjs/throttler";
import { Request } from "express";

@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard{
    // protected getTracker(request: Request){
        
    // }
}