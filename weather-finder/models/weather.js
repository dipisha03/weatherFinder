// ================ Schema for states ============== //

// MongoDB name = weatherfinder 

// Require mongoose
const mongoose = require("mongoose");

// Create Schema class
const Schema = mongoose.Schema;

// Create Article schema
const weatherSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true },
    location: { type: String, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Boolean, default: false },
    conditions: { type: String, default: false }
  }, { _id: false });


// Create the Article model with the ArticleSchema
const Weather = mongoose.model("Weather", weatherSchema);

// Export the Article model
module.exports = Weather;
