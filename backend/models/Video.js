const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  views: { type: Number, default: 0 }
});

module.exports = mongoose.model('Video', VideoSchema);
