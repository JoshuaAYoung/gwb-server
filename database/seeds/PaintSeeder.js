const Factory = use("Factory");
const Database = use("Database");

class PaintSeeder {
  async run() {
    const paintsArray = await Factory.model("App/Models/Paint").createMany(27);
    console.log(paintsArray);
  }
}

module.exports = PaintSeeder;
