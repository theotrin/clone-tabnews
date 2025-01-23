import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("DROP SCHEMA public CASCADE; CREATE SCHEMA public;");
}

if (process.env.NODE_ENV !== "production") {
  // Executa código de teste
  test("GET to /api/v1/migrations should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "GET",
    });
    expect(response.status).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);
  });
}
