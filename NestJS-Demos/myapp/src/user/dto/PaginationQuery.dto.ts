import { Type } from "class-transformer";
import { IsOptional, IsInt, Min } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    @IsInt()
    @Min(1)
    @Type(() => Number)
    page?: number

    @IsOptional()
    @IsInt()
    @Min(1)
    @Type(() => Number)
    limit?: number
}