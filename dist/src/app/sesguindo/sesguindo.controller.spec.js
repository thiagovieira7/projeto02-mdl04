"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const sesguindo_controller_1 = require("./sesguindo.controller");
const sesguindo_service_1 = require("./sesguindo.service");
describe('SesguindoController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [sesguindo_controller_1.SesguindoController],
            providers: [sesguindo_service_1.SesguindoService],
        }).compile();
        controller = module.get(sesguindo_controller_1.SesguindoController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=sesguindo.controller.spec.js.map