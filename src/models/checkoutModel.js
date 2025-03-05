import mongoose from "mongoose";

const checkOutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
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
  productTitle: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Pending",
  },
  paymentMethod: {
    type: String,
    enum: ["Cash on Delivery", "Credit Card", "Bank Transfer"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const checkOutModel =
  mongoose.models.checkOutModel ||
  mongoose.model("checkOutModel", checkOutSchema);

export default checkOutModel;
