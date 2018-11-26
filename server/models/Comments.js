const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentsSchema = new Schema({
  comment: String,
}, { timestamps: true });

CommentsSchema.methods.toJSON = function () {
  return {
    _id: this._id,
    comment: this.comment,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

mongoose.model('Comments', CommentsSchema);