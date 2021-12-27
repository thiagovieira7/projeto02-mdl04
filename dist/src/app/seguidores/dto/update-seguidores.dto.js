"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeguidoresDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_seguidores_dto_1 = require("./create-seguidores.dto");
class UpdateSeguidoresDto extends (0, mapped_types_1.PartialType)(create_seguidores_dto_1.CreateSeguidoresDto) {
}
exports.UpdateSeguidoresDto = UpdateSeguidoresDto;
//# sourceMappingURL=update-seguidores.dto.js.map