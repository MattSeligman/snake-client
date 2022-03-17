// require functions / game commands from play
const { connect } = require("./client");
const { setupInput } = require("./input");

// establishes a connection with the game server
connect()

// establish the input
setupInput();