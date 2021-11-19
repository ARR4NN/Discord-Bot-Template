const { Client, Collection, Message, MessageEmbed, Permissions } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        if (interaction.isContextMenu()) {
            const command = interaction.client.commands.get(interaction.commandName);
            if (command) command.execute(interaction);
        }
        if (!interaction.isCommand()) return;
        const commandName = interaction.commandName;

        const command =
            interaction.client.commands.get(commandName) ||
            interaction.client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

        try {
            if (!interaction.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) {
                interaction.reply({ content: "Oops, I need `EMBED_LINKS` permissions to work correctly." })
                return
            }
            command.execute(Client, interaction);
        } catch (error) {
            console.error(error);
            interaction.reply({ ephemeral: true, content: "There was an error! Contact administrators." }).catch(console.error);
        }

    },
};