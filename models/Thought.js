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
    username: [
      {
        type: String,
        required: true,
      },
    ],
    reactions: [Reaction],
    createdAt:
    {
      type: Date,
      default: Date.now,
      get: function () { return moment(this.createdAt, "MM YYYY hh:mm:ss"); }
    },
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
    return this.reactions.length;
  });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
