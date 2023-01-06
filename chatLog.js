const tmi = require("tmi.js");

const client = new tmi.Client({
  connection: {
    reconnect: true,
  },
  channels: ["AriaSaki"],
});

client.connect();

console.log('Connected to chat!')

client.on("message", (channel, tags, message, self) => {
    console.log(`${channel} - ${tags["display-name"]}: ${message}`);
});

