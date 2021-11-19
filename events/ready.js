const discord = require('discord.js')
const { status, statusType } = require("../config.json")
module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log("Logged in")
        console.log("[INFO] Pterodactyl mark as online.")
        client.user.setActivity(status, { type: statusType });

    },
};