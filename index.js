const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
const prefix = "y!";

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.legnth <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Satsujin love bot", {type:0});

});

bot.on('message', message => {
  if (message.author.bot) return;
//   if(message.channel.type === "dm") return;

  let prefix = 'y!';
  let messageArray = message.content.split( " ");
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 
    mention = message.mentions.users.first();
    msg = message.content.toLowerCase();
   
  if(msg.startsWith (prefix + "smooch")) {
    if(message.author.id != "182723698711592960") return;
      number = 2;
      var random = Math.floor (Math.random() * (number)) + 1;
      switch (random) {
        case 1: message.channel.send ( "Fufu... You're being affectionate today. Come here."); break;
        case 2: message.channel.send ( "My heart races in more ways than one when you do that, you know?"); break;
     }
   }
  
   if(msg.startsWith (prefix + "rank")) {
       number = 5;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: message.channel.send ("As expected, I'm also pleased. "); break;
         case 2: message.channel.send ("I'm going to imitate Momo. Yay~! You did it!"); break;
         case 3: message.channel.send ("Next time I expect you to try harder."); break;
         case 4: message.channel.send ("What’s wrong, that you can’t do something like this?"); break;
         case 5: message.channel.send ("We're going to have a secret intensive training session together."); break;
      }
    }
  
    if(msg.startsWith (prefix + "scout")) {
      let emoji = message.guild.emojis.find('name', "yuppi");
      message.react(emoji);
        number = 38;
        var random = Math.floor (Math.random() * (number)) + 1;
        switch (random) {
        case 1: message.channel.send ({files:["./images/yuki_birthday_sr.png"]}); break;
        case 2: message.channel.send ({files:["./images/yuki_birthday_ssr.png"]}); break;
        case 3: message.channel.send ({files:["./images/yuki_disone_ssr.png"]}); break;
        case 4: message.channel.send ({files:["./images/yuki_esperanza_ssr.png"]}); break;
        case 5: message.channel.send ({files:["./images/yuki_gardentea_ssr.png"]}); break;
        case 6: message.channel.send ({files:["./images/yuki_gothichalloween_ssr.png"]}); break;
        case 7: message.channel.send ({files:["./images/yuki_kingpudding_ssr.png"]}); break;
        case 8: message.channel.send ({files:["./images/yuki_kiseki_ur.png"]}); break;
        case 9: message.channel.send ({files:["./images/yuki_linked_ssr.png"]}); break;
        case 10: message.channel.send ({files:["./images/yuki_lullaby_ssr.png"]}); break;
        case 11: message.channel.send ({files:["./images/yuki_marchen_ssr.png"]}); break;
        case 12: message.channel.send ({files:["./images/yuki_monster_sr.png"]}); break;
        case 13: message.channel.send ({files:["./images/yuki_monster_ssr.png"]}); break;
        case 14: message.channel.send ({files:["./images/yuki_nodoubt_sr.png"]}); break;
        case 15: message.channel.send ({files:["./images/yuki_nodoubt_ssr.png"]}); break;
        case 16: message.channel.send ({files:["./images/yuki_order_ssr.png"]}); break;
        case 17: message.channel.send ({files:["./images/yuki_ordinarydays_r.png"]}); break;
        case 18: message.channel.send ({files:["./images/yuki_ordinarydays_sr.png"]}); break;
        case 19: message.channel.send ({files:["./images/yuki_ordinarydays_ssr.png"]}); break;
        case 20: message.channel.send ({files:["./images/yuki_rabbit_sr.png"]}); break;
        case 21: message.channel.send ({files:["./images/yuki_rabbit_ssr.png"]}); break;
        case 22: message.channel.send ({files:["./images/yuki_rehearsal_sr.png"]}); break;
        case 23: message.channel.send ({files:["./images/yuki_rehearsal_ssr.png"]}); break
        case 24: message.channel.send ({files:["./images/yuki_rehearsal_ur.png"]}); break;
        case 25: message.channel.send ({files:["./images/yuki_shuffle_ssr.png"]}); break;
        case 26: message.channel.send ({files:["./images/yuki_sparkle_ssr.png"]}); break; 
        case 27: message.channel.send ({files:["./images/yuki_xmasmagic_ssr.png"]}); break;  
        case 28: message.channel.send ({files:["./images/yuki_sweets_ssr.png"]}); break;
        case 29: message.channel.send ({files:["./images/yuki_taisho_ssr.png"]}); break;
        case 30: message.channel.send ({files:["./images/yuki_valentine_ssr.png"]}); break;
        case 31: message.channel.send ({files:["./images/yuki_whiteday_sr.png"]}); break;
        case 32: message.channel.send ({files:["./images/yuki_whiteday_ssr.png"]}); break;
        case 33: message.channel.send ({files:["./images/yuki_winter_sr.png"]}); break;
        case 34: message.channel.send ({files:["./images/yuki_winter_ssr.png"]}); break;
        case 35: message.channel.send ({files:["./images/yuki_work_sr.png"]}); break;
        case 36: message.channel.send ({files:["./images/yuki_work_ssr.png"]}); break;
        case 37: message.channel.send ({files:["./images/yuki_xmasrock_ssr.png"]}); break;
        case 38: message.channel.send ({files:["./images/yuki_zodiac_ssr.png"]}); break;        
      }
    }
    
  if (msg.startsWith (prefix + "send")) {
       if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice(6);
        mention.send (mentionMessage);
//         return message.channel.send ("Message sent.");
      }
  
  if (msg.startsWith ("hey gays")) {
    return message.channel.send("And Gaku.");
  }
  
   if(msg.startsWith (prefix + "order")) {
     number = 2;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
       case 1: message.channel.send ("We're fresh out of Yuki (lol)"); break;
       case 2: message.channel.send ("Unfortunate for you, but fortunate for me, I was bought out by a certain Mr. Satsujin, you see (lol)"); break;
    }
   }
  
   if(msg.startsWith (prefix + "quote")) {
     number = 14;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
       case 1: message.channel.send ("You remind me of a puppy, just like Momo. No, maybe you're more like a tiny baby rabbit?"); break;
       case 2: message.channel.send ("I'm a vegetarian. Not for spirtual reasons, just because I prefer that sort of food."); break;
       case 3: message.channel.send ("If I have the time to eat breakfast, I'd rather spend it sleeping..."); break;
       case 4: message.channel.send ("I've used the \"relative's funeral\" excuse so many times over my school years that I don't remember how much of my family is supposed to be dead by now. I need to come up with something else. \nMaybe I'll go with some kind of illness."); break;
       case 5: message.channel.send ("What were we talking about again? How great I am at cooking?"); break;
       case 6: message.channel.send ("Aren't you tired of looking at this bespectacled man by now? How about someone grown-up, and a classic *ikemen*?"); break;
       case 7: message.channel.send ("I'll tell you as much personal information as you want. First, should I tell you my three sizes?"); break;
       case 8: message.channel.send ("If it is true that we are what we eat, then I am made of very strong vegetables."); break;
       case 9: message.channel.send ("Since I have someone who keeps praising me with \"ikemen, ikemen\", that's probably how I can stay beautiful. I'm a \"Praise me and I'll grow\" type after all."); break;
       case 10: message.channel.send ("I'm more or less \nalive."); break;
       case 11: message.channel.send ("I'm getting sleepy so I'll go to bed."); break;
       case 12: message.channel.send ("Momo says that Re:vale's success is thanks to me, but it's probably thanks to Momo."); break;
       case 13: message.channel.send ("I wanted to sing songs. The reason I went the direction of an idol was... because of my face? lol"); break;
       case 14: message.channel.send ("Let Satsujin know that I'll be doing fanservice for him."); break;
    }
  }

  if (msg.startsWith ("<:blockchu:451782181543477258>")) {
    return message.channel.send("<:blockchu:451782181543477258>");
  }
  
  if (msg.startsWith ("i can't believe ryo is dead")) {
    return message.channel.send("Finally.");
  }

  if (msg.startsWith ("i'm gonna munch")) {
    return message.channel.send("I'm gonna crunch.");
  }

  if (msg.startsWith ("yuki if you're out there")) {
    return message.channel.send("I'm right here.");
  }

  if (msg.startsWith ("i love you yuki")) {
    if(message.author.id != "182723698711592960") return;
    let emoji = message.guild.emojis.find('name', "yuppismooch");
    message.react(emoji);
    number = 2;
    var random = Math.floor (Math.random() * (number)) + 1;
    switch (random) {
      case 1: message.channel.send ("<:yuppismooch:454423176026390534> I love you too, Satsujin. I don't know how to put into words how happy I am with you."); break;
      case 2: message.channel.send ("<:yuppismooch:454423176026390534> I would like you to keep loving me, and only me, forever from now on. And I'll make sure to keep charming you."); break;
   }
 }
  
  if (msg.startsWith ("good morning yuki")) {
      let modRole = message.guild.roles.find("name","YUKILOVER69.");
      if(message.member.roles.has(modRole.id)) {
        message.channel.send("Ah, Satsujin, I thought you were an angel for a moment...");
      } else {
        message.channel.send("Good morning. I wish I could sleep for 8 hours.");
        }
    }

  if (msg.startsWith ("good night yuki")) {
    return message.channel.send("Good kids should head to sleep early.");
  }

  if(cmd ===`${prefix}help`){
    let helpembed = new Discord.RichEmbed()
    .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
    .setColor("#00ff67")
    .addField("Commands:","**y!yuki** *<question>* | Ask him anything. \n**y!send** *<@user> <message>* | Send a DM to the mentioned user\n**y!scout** | Solo Yolo \n**y!quote** | Random quote\n**y!say** *<message>* | Have the bot say anything you want\n**y!help** | Displays this help message")
    .addField("Basic y!commands:", "mafia (alias:maf) || leaf || ryo || order || car || rank || watchout || smooch || cat")
    .addField("Command phrases:", "I can't believe Ryo is dead || I'm gonna munch|| I love you Yuki || Good morning Yuki || Good night Yuki || Yuki if you're out there || Hey gays")
    message.channel.send(helpembed);
  }
  
  if(cmd ===`${prefix}botinfo`){
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#00ff67")
    .setThumbnail(bicon)
    .addField("Name:", bot.user.username)
    .addField("Twitter:", "https://twitter.com/Superbiael")
  return message. channel.send(botembed);
  }

  if(cmd === `${prefix}say`){
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

  if(cmd === `${prefix}clear`){
  if(message.author.id != "182723698711592960") return;  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof.");
  if(!args[0]) return message.channel.send("oof.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}  
  
  if(cmd === `${prefix}cat`){
    return message.channel.send ({files:["./images/cat.png"]});
  }
  
  if(cmd === `${prefix}watchout`){
  return message.channel.send ("You better watch out.", {files:["./images/youbetterwatchout.png"]});
  }  
  
  if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
  }

  if(cmd === `${prefix}leaf`){
    message.react('🍃');
    return message.channel.send("Babe, that me leaf 🍃");
  }

  if(cmd === `${prefix}ryo`){
    return message.channel.send("Oh fuck. Bastard spotted.");
  }

});

bot.login(process.env.token);
