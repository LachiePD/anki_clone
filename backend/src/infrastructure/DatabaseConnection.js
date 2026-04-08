import { Pool } from "pg";

class DatabaseConnection {
  constructor() {
    this.pool = new Pool({
      connectionString: process.env.CONNECTION_STRING,
      connectionTimeoutMillis: 10000,
    });
  }
  async query(text, params) {
    try {
      const result = await this.pool.query(text, params);

      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default DatabaseConnection;
