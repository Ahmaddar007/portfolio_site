import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const contactModel =
  mongoose.model.contactModel || mongoose.model("contactModel", contactSchema);

export default contactModel;
