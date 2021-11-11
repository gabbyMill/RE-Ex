import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
  name: String,
  city: String,
  license: Number,
  // id: Number,
});

const Agent = mongoose.model("Agent", agentSchema);

// this has to be after Person for it to work
// agentSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });

export default Agent;
