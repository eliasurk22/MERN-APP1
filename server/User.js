const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Define schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  consumerNumber: Number,
  meterNumber: Number,
  connectionType: String,
  password: String,
});

// Create model object
const UserModel = new mongoose.model("Users", UserSchema);
module.exports = UserModel;
