import { CreateSesguindoDto } from './dto/create-sesguindo.dto';
import { UpdateSesguindoDto } from './dto/update-sesguindo.dto';
export declare class SesguindoService {
    create(createSesguindoDto: CreateSesguindoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSesguindoDto: UpdateSesguindoDto): string;
    remove(id: number): string;
}
