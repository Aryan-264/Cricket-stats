const mongoose = require('mongoose');

// Define the schema for the player statistics
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  format: {
    Test: {
      matches: {
        type: Number,
        default: 0
      },
      runs: {
        type: Number,
        default: 0
      },
      average: {
        type: Number,
        default: 0.0
      },
      centuries: {
        type: Number,
        default: 0
      }
    },
    ODI: {
      matches: {
        type: Number,
        default: 0
      },
      runs: {
        type: Number,
        default: 0
      },
      average: {
        type: Number,
        default: 0.0
      },
      centuries: {
        type: Number,
        default: 0
      }
    },
    T20: {
      matches: {
        type: Number,
        default: 0
      },
      runs: {
        type: Number,
        default: 0
      },
      average: {
        type: Number,
        default: 0.0
      },
      centuries: {
        type: Number,
        default: 0
      }
    }
  }
});

// Create a model based on the schema
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
