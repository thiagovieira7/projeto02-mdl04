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
exports.SeguidoresController = void 0;
const common_1 = require("@nestjs/common");
const seguidores_service_1 = require("./seguidores.service");
const create_seguidores_dto_1 = require("./dto/create-seguidores.dto");
const update_seguidores_dto_1 = require("./dto/update-seguidores.dto");
let SeguidoresController = class SeguidoresController {
    constructor(seguidoresService) {
        this.seguidoresService = seguidoresService;
    }
    create(createSeguidoresDto) {
        return this.seguidoresService.create(createSeguidoresDto);
    }
    findAll() {
        return this.seguidoresService.findAll();
    }
    findOne(id) {
        return this.seguidoresService.findOne(+id);
    }
    update(id, updateSeguidoresDto) {
        return this.seguidoresService.update(+id, updateSeguidoresDto);
    }
    remove(id) {
        return this.seguidoresService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seguidores_dto_1.CreateSeguidoresDto]),
    __metadata("design:returntype", void 0)
], SeguidoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeguidoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeguidoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_seguidores_dto_1.UpdateSeguidoresDto]),
    __metadata("design:returntype", void 0)
], SeguidoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeguidoresController.prototype, "remove", null);
SeguidoresController = __decorate([
    (0, common_1.Controller)('/api/v1/seguidores'),
    __metadata("design:paramtypes", [seguidores_service_1.SeguidoresService])
], SeguidoresController);
exports.SeguidoresController = SeguidoresController;
//# sourceMappingURL=seguidores.controller.js.map