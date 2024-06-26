const connectDB = require('./dbserver');
const Player = require('./models/stats');
const PlayersJson = require('./players.json');

const start = async () => {
  try {
    await Player.create(PlayersJson);
    console.log("Data inserted successfully");
  } catch (err) {
    console.log(err);
  }
};

start();
