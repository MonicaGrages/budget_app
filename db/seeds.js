var mongoose = require('mongoose');
var Credit = require('../db/schema.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost/budget-app');

var credits = [
  {amount: 123, note: "money for stuff"},
  {amount: 234, note: "dollars for things"},
  {amount: 345, note: "paycheck"},
  {amount: 456, note: "loan from mom"}
];

Credit.remove({})
  .then(function(){
    return Credit.create(credits);
  })
  .then(function(credits){
    console.log(credits);
  })
  .then(function(){
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected');
    });
  });

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// // Use native promises
// mongoose.Promise = global.Promise;
// var CreditSchema = new Schema({
//   note: { type: String, required: true },
//   total: { type: String, required: true },
// });
// CreditSchema.pre('save', function (next) {
//   now = new Date();
//   this.updated_at = now;
//   if (!this.created_at) {
//     this.created_at = now;
//   }
//   next();
// });
// var ExpenseSchema = new Schema({
//   note: { type: String, required: true },
//   total: { type: String, required: true },
// });
// ExpenseSchema.pre('save', function (next) {
//   now = new Date();
//   this.updated_at = now;
//   if (!this.created_at) {
//     this.created_at = now;
//   }
//   next();
// });
// var CreditModel = mongoose.model("Credit", CreditSchema);
// var ExpenseModel = mongoose.model("Expense", ExpenseSchema);
// module.exports = {
//   Credit: CreditModel,
//   Expense: ExpenseModel
// };
