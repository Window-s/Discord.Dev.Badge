const { Client, Collection } = require("discord.js");
require("dotenv").config;
const client = new Client({
    intents: 32767,
});
const { token } = require("./secrets/config.json");
const { default: mongoose } = require("mongoose");

module.exports = client









client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./secrets/config.json");
module.exports.Client = client

require("./Handler")(client);





client.login(token);

