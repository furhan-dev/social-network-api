const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      default: moment(),
      get: value => moment(value).format("M/DD/YYYY h:mm:ss A")
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;