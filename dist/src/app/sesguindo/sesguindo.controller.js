"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SesguindoController = void 0;
const common_1 = require("@nestjs/common");
const sesguindo_service_1 = require("./sesguindo.service");
const create_sesguindo_dto_1 = require("./dto/create-sesguindo.dto");
const update_sesguindo_dto_1 = require("./dto/update-sesguindo.dto");
let SesguindoController = class SesguindoController {
    constructor(sesguindoService) {
        this.sesguindoService = sesguindoService;
    }
    create(createSesguindoDto) {
        return this.sesguindoService.create(createSesguindoDto);
    }
    findAll() {
        return this.sesguindoService.findAll();
    }
    findOne(id) {
        return this.sesguindoService.findOne(+id);
    }
    update(id, updateSesguindoDto) {
        return this.sesguindoService.update(+id, updateSesguindoDto);
    }
    remove(id) {
        return this.sesguindoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sesguindo_dto_1.CreateSesguindoDto]),
    __metadata("design:returntype", void 0)
], SesguindoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SesguindoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SesguindoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sesguindo_dto_1.UpdateSesguindoDto]),
    __metadata("design:returntype", void 0)
], SesguindoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SesguindoController.prototype, "remove", null);
SesguindoController = __decorate([
    (0, common_1.Controller)('sesguindo'),
    __metadata("design:paramtypes", [sesguindo_service_1.SesguindoService])
], SesguindoController);
exports.SesguindoController = SesguindoController;
//# sourceMappingURL=sesguindo.controller.js.map