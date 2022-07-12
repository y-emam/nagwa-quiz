import supertest from "supertest";
import app from "../server";

const tester = supertest(app);

const data = {
  score: 90,
};

describe("Testing rank endpoints", () => {
  it("checking for the status code", async () => {
    const response = await tester.post("/api/words").send(data);

    expect(response.statusCode).toEqual(200);
  });

  it("checking for the response data of that endpoint", async () => {
    const response = await tester.post("/api/words").send(data);

    expect(response.body.data).toEqual(80);
  });
});
