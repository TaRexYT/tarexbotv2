const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready"), function() {
    bot.user.setGame "i love TaRex, !help");
    console.log("le bot a bien étes conecte");
});

bot.login("NDI4NzQwMjQ3Mjg4MDIxMDAy.DZ3qgA.8P7ih6vz4lkDOFVMQNAwV_opIWs");
