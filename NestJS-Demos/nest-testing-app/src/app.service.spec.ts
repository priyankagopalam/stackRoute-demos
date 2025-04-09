import { Test, TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service";

describe('AppService', () => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService]
        }).compile();

        service = module.get<AppService>(AppService);
    });

    it('Should return user by id', () => {
        const user = service.getUserId(1);
        expect(user).toEqual({ id: 1, name: 'John' });
    });

    it('Should throw NotFoundException for Invalid ID', () => {
        expect(() => service.getUserId(123)).toThrowError('User does not exists');
    });

})

