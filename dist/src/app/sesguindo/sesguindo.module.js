"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SesguindoModule = void 0;
const common_1 = require("@nestjs/common");
const sesguindo_service_1 = require("./sesguindo.service");
const sesguindo_controller_1 = require("./sesguindo.controller");
let SesguindoModule = class SesguindoModule {
};
SesguindoModule = __decorate([
    (0, common_1.Module)({
        controllers: [sesguindo_controller_1.SesguindoController],
        providers: [sesguindo_service_1.SesguindoService]
    })
], SesguindoModule);
exports.SesguindoModule = SesguindoModule;
//# sourceMappingURL=sesguindo.module.js.map