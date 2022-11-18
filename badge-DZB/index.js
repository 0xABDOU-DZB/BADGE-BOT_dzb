const { Client } = require("discord.js");

const bot = new Client({ intents: ["Guilds"] });
console.log("Login to bot DZB...");
bot.login("TOKEN DZB")
    .then(() => console.log("Connected to bot DZB !"))
    .catch((error) => console.log("Unable to connect to the bot DZB - " + error));

bot.on("ready", async () => {

    await bot.application.commands.set([
        {
            name: "ping",
            description: "Pong!"
        }
    ]);

    console.log("The bot DZB is ready !");
});

bot.on("interactionCreate", (interaction) => {

    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping")
        interaction.reply("ZBIDZBOBA!");
});
