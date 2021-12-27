import { PrismaService } from '../../prisma/prisma.service';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { Seguidores } from '@prisma/client';
export declare class SeguidoresService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createSeguidoresDto: CreateSeguidoresDto): Promise<Seguidores>;
    remove(id: number): string;
}
