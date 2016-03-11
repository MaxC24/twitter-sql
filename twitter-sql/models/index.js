// pull in the Sequelize library
var Sequelize = require('sequelize');

// create an instance of a database connection
// which abstractly represents our app's sqlite database
var twitterjsDB = new Sequelize('twitterjs', 'root', null, {
  dialect: 'sqlite',
  storage: '/Users/Sushi24/fullstack_academy/week2/day5/database/twitterjs.db'
});

// open the connection to our database
twitterjsDB
.authenticate()
.then(function () {
  console.log('Connection has been established successfully.');
})
.catch(function (err) {
  console.error('Problem connecting to the database:', err);
});

var Tweet = require('./tweet')(twitterjsDB);
var User = require('./user')(twitterjsDB);

// adds a UserId foreign key to the `Tweets` table
User.hasMany(Tweet);
Tweet.belongsTo(User);

module.exports = {
  User: User,
  Tweet: Tweet
};

// User.findOne()
// .then(function (user) {
//     // big old crazy object, but no name or 
//     // id anywhere in there
//     console.log(user); 
// });

// User.findOne()
// .then(function (user) {
//     // produces expected output. wat. 
//     console.log(user.name); 
// });

// User.findOne().then(function (user) {
//   console.log(user.dataValues);
// });

// User.findOne().then(function (user) {
//   console.log(user.get({plain: true}))
// });

// User.findOne().then(function (user) {
//   return user.getTweets();
// })
// .then(function (tweets) {
//   JSON.stringify(tweets); // another way of just logging the plain old values
// });






















