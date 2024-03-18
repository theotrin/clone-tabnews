import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTRGRES_HOST,
    port: process.env.POSTRGRES_PORT,
    user: process.env.POSTRGRES_USER,
    database: process.env.POSTRGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();

  return result;
}

export default {
  query: query,
};
