const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  name: String,
  City: String,
  License: Number,
  id: Number,
});

const Agent = mongoose.model("Person", agentSchema);

// this has to be after Person for it to work
agentSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = {
  Agent,
};
