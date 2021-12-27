import { SesguindoService } from './sesguindo.service';
import { CreateSesguindoDto } from './dto/create-sesguindo.dto';
import { UpdateSesguindoDto } from './dto/update-sesguindo.dto';
export declare class SesguindoController {
    private readonly sesguindoService;
    constructor(sesguindoService: SesguindoService);
    create(createSesguindoDto: CreateSesguindoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSesguindoDto: UpdateSesguindoDto): string;
    remove(id: string): string;
}
