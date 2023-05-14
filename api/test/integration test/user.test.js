let server;

const request = require("supertest");

describe("api/user/", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(() => {
    server.close();
  });

  describe("GET / ", () => {
    it("should return all users", async () => {
      const res = await request(server).get("api/user/");
      expect(res.status).toBe(200);
    });
  });
});
