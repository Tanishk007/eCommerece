var mongoose = require('mongoose');
var validatorModule = require('validator');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var SellerLoginSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, 'Name is required'],
      validate: {
        validator: function (value) {
          return validatorModule.isAlpha(value);
        },
        message: '{VALUE} is not a valid name!'
      }
    },
    Mobile: {
      type: Number,
      required: [true, 'User phone number required'],
      unique: true,
      validate: {
            validator: function(value) {
              return /\d{10}/;
            },
            message: '{VALUE} is not a valid 10 digit number!'
      }
    },
    Email: {
      type: String,
      required: [true, 'User Email address required'],
      unique: true,
      validate: {
        validator: function (value) {
          return validatorModule.isEmail(value);
        },
        message: '{VALUE} is not a valid Email address!'
      }
    },
    Password: {
      type: String,
      required: [true, 'User Password is required']
    }
  }
);


//Export model
module.exports = mongoose.model('SellerLogin', SellerLoginSchema);
