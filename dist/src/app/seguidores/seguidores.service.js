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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguidoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const update_seguidores_dto_1 = require("./dto/update-seguidores.dto");
let SeguidoresService = class SeguidoresService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSeguidoresDto) {
        return await this.prisma.seguidores.create({
            data: Object.assign({}, createSeguidoresDto)
        }, async, findAll(), Promise < Seguidores[] > {
            return: await this.prisma.seguidores.findMany()
        }, async, findOne(id, number), Promise < Seguidores > {
            return: await this.prisma.seguidores.findUnique({ where: { id } })
        }, async, update(id, number, updateSeguidoresDto, update_seguidores_dto_1.UpdateSeguidoresDto), Promise < Seguidores > {
            return: await this.prisma.seguidores.update({ where: { id } }, updateSeguidoreDtodata, Object.assign({}, updateSeguidoresDto), where, { id })
        });
    }
    remove(id) {
        return `This action removes a #${id} seguidore`;
    }
};
SeguidoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SeguidoresService);
exports.SeguidoresService = SeguidoresService;
//# sourceMappingURL=seguidores.service.js.map