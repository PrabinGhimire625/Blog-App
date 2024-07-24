import mongoose from "mongoose";

const laptopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  storage: { type: String, required: true },
  screenSize: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, default: "" },
});

const Laptop = mongoose.model("laptop", laptopSchema);
export default Laptop;
