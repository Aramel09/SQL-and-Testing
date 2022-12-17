// https://www.npmjs.com/package/supertest
// https://jestjs.io/docs/getting-started
const request = require("supertest");
const createServer = require("../utils/server");

const app = createServer();

const exampleUser = {
  username: "bob",
  password: "password",
  haircolor: "blond",
};

describe("Users", () => {
  describe("Test Invalid Routes", () => {
    it("Should return 404", async () => {
      await request(app).get("/badroute").expect(404);
    });
  });

  describe("Get all users", () => {
    it("Should get all users and return a 200", async () => {
      const { statusCode, body } = await request(app).get("/users");
      expect(statusCode).toBe(200);
      expect(body[0].id).toBe(1);
    });
  });

  describe("Create a User", () => {
    it("Should create a user and return 200", async () => {
      const { statusCode } = await request(app).post("/user").send(exampleUser);
      expect(statusCode).toBe(200);
    });
  });
});
