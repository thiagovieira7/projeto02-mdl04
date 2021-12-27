"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const sesguindo_service_1 = require("./sesguindo.service");
describe('SesguindoService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [sesguindo_service_1.SesguindoService],
        }).compile();
        service = module.get(sesguindo_service_1.SesguindoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=sesguindo.service.spec.js.map