const request = require("supertest");
const app = require(".");

describe("Sample test", () => {
  it("should get main route", async () => {
    const res = await request(app).get("/20720020");

    expect(res.body).toHaveProperty("status", 200);
  });
});
