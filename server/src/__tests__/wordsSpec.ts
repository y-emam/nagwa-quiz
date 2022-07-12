import supertest from "supertest";
import app from "../server";

const tester = supertest(app);

describe("Testing words endpoints", () => {
  it("checking for the status code", async () => {
    const response = await tester.get("/api/words");

    expect(response.statusCode).toEqual(200);
  });

  it("checking for the response data of that endpoint", async () => {
    const response = await tester.get("/api/words");

    expect(response.body.data.length).toEqual(10);
  });
});
