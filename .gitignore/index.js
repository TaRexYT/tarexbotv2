const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("i love TaRex, !help");
    console.log("le bot a bien étes conecte");
});

bot.login("NDI4NzQwMjQ3Mjg4MDIxMDAy.DZ37Gg.NaePSiWDIKlpoxXo1L1vZ_3Wlq4");
