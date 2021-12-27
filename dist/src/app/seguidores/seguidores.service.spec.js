"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const seguidores_service_1 = require("./seguidores.service");
describe('SeguidoresService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [seguidores_service_1.SeguidoresService],
        }).compile();
        service = module.get(seguidores_service_1.SeguidoresService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=seguidores.service.spec.js.map