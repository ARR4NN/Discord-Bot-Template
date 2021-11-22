const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { TOKEN, clientId, guildId } = require('./util/config');
const { readdirSync } = require("fs");
const fs = require('fs');
const chalk = require('chalk');
//const prompt = require("prompt-sync")({ sigint: true });
//With readline
//console.log("----------------------------------------------------\nPlease select where you want commands registering\n1 = Global 2 = Guild Only\n----------------------------------------------------")
//const info = prompt("");
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
/**
 * Import all commands
 */
const commandFolders = readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        const cmd = {
            name: command.name,
            description: command.description,
            type: command.type,
            options: command.options,
        };
        if (["MESSAGE", "USER"].includes(command.type)) delete command.description;
        console.log(chalk.blue("Loaded command /" + cmd.name));
        // console.log("Loaded command - " + cmd.name)

        commands.push(cmd);
    }
}
const rest = new REST({ version: '9' }).setToken(TOKEN);
(async () => {
    try {
        console.log(chalk.green("Started refreshing application (/) commands."));
        // console.log('Started refreshing application (/) commands.');
        // if (info == 1) {
        //     console.log("Submitting global commands")
        //     await rest.put(
        //         Routes.applicationGuildCommands(clientId, guildId),
        //         { body: commands },
        //     );
        // } else if (info == 2) {
        console.log("Submitting guild commands")
        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );
        //}
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            // Routes.applicationGuildCommands(clientId, guildId),
            // Routes.applicationCommands(clientId),
            { body: commands },
        );
        console.log(chalk.green("Successfully reloaded application (/) commands."));
        // console.log('Successfully reloaded application (/) commands.');
        return process.exit(1);
    } catch (error) {
        console.error(error);
    }
})();