import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';
export declare class SeguidoresController {
    private readonly seguidoresService;
    constructor(seguidoresService: SeguidoresService);
    create(createSeguidoresDto: CreateSeguidoresDto): Promise<import(".prisma/client").Seguidores>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateSeguidoresDto: UpdateSeguidoresDto): any;
    remove(id: string): string;
}
