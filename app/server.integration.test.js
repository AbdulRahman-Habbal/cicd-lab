const assert = require("assert");
const Redis = require("ioredis");
const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: 6379,
});

describe("Redis Integration", () => {
  after(() => redis.quit());
  it("should connect and set/get a value", async () => {
    await redis.set("test-key", "hello-ci");
    const value = await redis.get("test-key");
    assert.strictEqual(value, "hello-ci");
  });
});