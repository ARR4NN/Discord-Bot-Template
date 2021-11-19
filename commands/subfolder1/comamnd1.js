const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {
    name: "notcoolcommand", // Command Name
    description: "commandDescription", // Command Description
    options: [ // Options
        {
            name: "string",
            type: 3,
            description: "A string",
            required: false,
        },
        {
            name: "user",
            type: 6,
            description: "A user",
            required: false,
        },
    ],
    async execute(Client, interaction) {
        interaction.reply({ content: "Welcome to command 1!" }).catch(err => { });
    }
};