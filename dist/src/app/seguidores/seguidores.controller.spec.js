"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const seguidores_controller_1 = require("./seguidores.controller");
const seguidores_service_1 = require("./seguidores.service");
describe('SeguidoresController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [seguidores_controller_1.SeguidoresController],
            providers: [seguidores_service_1.SeguidoresService],
        }).compile();
        controller = module.get(seguidores_controller_1.SeguidoresController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=seguidores.controller.spec.js.map