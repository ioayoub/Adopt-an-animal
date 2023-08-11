const AbstractManager = require("./AbstractManager");

class AnimalManager extends AbstractManager {
  constructor() {
    super({ table: "animal" });
  }

  async create({ name, image, description, age, category }) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, image, description, age, category_id) values (?, ?, ?, ?, ?)`,
      [name, image, description, age, category]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ? `,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select a.id, a.name, a.image, a.description, a.age, a.is_adopted, c.name AS category from ${this.table} AS a join category AS c on a.category_id = c.id`
    );

    return rows;
  }
}

module.exports = AnimalManager;
