"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tweet_service_1 = require("./tweet.service");
describe('TweetService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [tweet_service_1.TweetService],
        }).compile();
        service = module.get(tweet_service_1.TweetService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=tweet.service.spec.js.map