const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const moment = require('moment');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText:
    {
      type: String,
      required: true,
      minLength: 1,
      maxLenght: 280
    },
    createdAt:
    {
      type: Date,
      default: Data.now,
      get: function () { return moment(this.createdAt, "MM YYYY hh:mm:ss"); }
    },
    username: [
      {
        type: String,
        required: true,
      },
    ],
    reactions: [Reaction],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

// Initialize our Thought model
const User = model('thought', thoughtSchema);

module.exports = Thought;
