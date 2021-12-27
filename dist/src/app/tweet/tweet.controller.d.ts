import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
export declare class TweetController {
    private readonly tweetService;
    constructor(tweetService: TweetService);
    create(createTweetDto: CreateTweetDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTweetDto: UpdateTweetDto): string;
    remove(id: string): string;
}
