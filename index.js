const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Munching and Crunching`);
});

// Event to listen to messages sent to the server where the bot is located
bot.on('message', message => {
    // So the bot doesn't reply to iteself
  if (message.author.bot) return;

  if (message.content.indexOf("I love you Yuki") === 0) {
    return message.channel.send("I love you too, Satsujin");
    }

  if (message.content.indexOf("Yuki is hot") === 0) {
    return message.channel.send("I know.");
    }

  if (message.content.indexOf("Yuppi") === 0) {
    return message.channel.send("Gakkyun");
    }

  if (message.content.indexOf("I can't believe Ryo is dead") === 0) {
    return message.channel.send("Finally.");
    }
  
  if (message.content.indexOf("I'm gonna munch") === 0) {
    return message.channel.send("I'm gonna crunch.");
    }
  
  if (message.content.indexOf("Yuki, if you're out there") === 0) {
    return message.channel.send("Don't worry, I'm here.");
    }
    }
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = 'y!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd ===`${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#00ff67")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)

  return message. channel.send(botembed);
  }

  if(cmd === `${prefix}mafia`){
    return message.channel.send("maf maf");
  }

  if(cmd === `${prefix}leaf`){
    return message.channel.send("Babe, that me leaf 🍃");
  }

  if(cmd === `${prefix}ryo`){
    return message.channel.send("Oh fuck. Bastard spotted.");
  }
  
  if(cmd === `${prefix}order`){
    return message.channel.send("We're fresh out of Yuki (lol) ");
  }
  
  if(cmd === `${prefix}car`){
    return message.channel.send("Papa, buy me a car.");
  }
});

bot.login(process.env.token);
