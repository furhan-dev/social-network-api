const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const {
  getRandomUsernames,
  getRandomThought,
  getRandomReactions
} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing collections 
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];
  const thoughts = [];
  const usernames = getRandomUsernames(20);
  // helper to generate thoughts obj
  const getThoughts = (username) => {
    const randomThoughts = [];
    const randomNumThoughts = Math.floor(Math.random() * 10);
    for (let i = 0; i < randomNumThoughts; i++) {
      randomThoughts.push({
        thoughtText: getRandomThought(),
        username: username,
        reactions: getRandomReactions(Math.floor(Math.random() * 5), usernames)
      });
    }
    return randomThoughts;
  };

  usernames.forEach(username => {
    const email = username + '@foo.bar';
    const randomThoughts = getThoughts(username);
    thoughts.push(...randomThoughts);

    users.push({
      username: username,
      email: email,
    });
  });

  await Thought.collection.insertMany(thoughts);
  for (const user of users) {
    const thoughtIds = [];
    await Thought.find({ username: user.username })
      .then(results => {
        thoughtIds.push(...results.map(result => result._id));
        user.thoughts = thoughtIds;
      })
      .catch(err => console.log(err));
  }
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
