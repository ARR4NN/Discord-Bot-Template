/**
 * Module Imports
 */
// const os = require("os")
// const homdir = os.homedir()
// const config = require("./config.json");
// if (homdir == `C:\\Users\\Ajhar`) {
//   var TOKEN = config.TOKENTESTING
// } else {
//   var TOKEN = config.TOKEN
// }
const { TOKEN } = require("./config.json")
const { Client, Collection, Intents } = require("discord.js");
const { readdirSync } = require("fs");
const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
const client = new Client({
    disableMentions: "everyone",
    restTimeOffset: 0,
    intents: [
        Intents.FLAGS.GUILDS,
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
client.login(TOKEN);
client.commands = new Collection();
client.on("ready", () => {
    console.log(`${client.user.username} ready!`);
    client.user.setActivity(`Hello`, { type: "PLAYING" });
});
/**
 * Event Handling
 */
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}
/**
 * Import all commands
 */
const commandFolders = readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}


process.on("unhandledRejection", async (error) => {
    console.log(error)
})
process.on("unhandledException", async (error) => {
    console.log(error)
})