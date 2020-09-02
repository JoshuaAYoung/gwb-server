"use strict";

const Schema = use("Schema");

class PaintsSchema extends Schema {
  up() {
    this.create("paints", (table) => {
      table.increments();
      table.string("type", 80).notNullable();
      table.string("name", 80).notNullable().unique();
      table.string("hex_code", 7).notNullable();
      table.timestamps();
    });
  }
  down() {
    this.drop("paints");
  }
}

module.exports = PaintsSchema;
