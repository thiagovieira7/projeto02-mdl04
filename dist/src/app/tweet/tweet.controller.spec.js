"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tweet_controller_1 = require("./tweet.controller");
const tweet_service_1 = require("./tweet.service");
describe('TweetController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [tweet_controller_1.TweetController],
            providers: [tweet_service_1.TweetService],
        }).compile();
        controller = module.get(tweet_controller_1.TweetController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=tweet.controller.spec.js.map