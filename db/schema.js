var mongoose = require('mongoose');

var CreditSchema = mongoose.Schema({
  amount: Number,
  note: String,
  createdAt: Date
});

CreditSchema.pre('save', function (next) {
  now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model('Credit', CreditSchema);
