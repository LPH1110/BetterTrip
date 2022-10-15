const mongoose = require("mongoose");

async function connect(databaseName = "") {
  const mongoAtlasUri = `mongodb+srv://LPH1110:${process.env.MONGO_ATLAS_URI}@cluster0.pxo93bk.mongodb.net/${databaseName}`;
  try {
    await mongoose.connect(mongoAtlasUri);
    console.log("-> Connected to DB successfully!");
  } catch (e) {
    console.log("-> Failed to connect DB...");
  }
}

module.exports = { connect };
