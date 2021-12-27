import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
export declare class TweetService {
    create(createTweetDto: CreateTweetDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTweetDto: UpdateTweetDto): string;
    remove(id: number): string;
}
