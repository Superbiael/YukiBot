// const botconfig = require("./botconfig.json"); // Delete this when transfering to Github
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = "y!";
bot.commands = new Discord.Collection();

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
   bot.user.setActivity("I love you Satsujin", {type:0});
  });

   bot.on("message", async message => {
   // if (message.author.bot) return;
   if(message.channel.type === "dm") return;

   let prefix = 'y!';
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0]
   let args = messageArray.slice(1);
   let commandfile = bot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(bot,message,args);

   msg = message.content.toLowerCase();
   mention = message.mentions.users.first();

   // Redirect to specific channel
   // let botschannel = message.guild.channels.find(channel => channel.name === 'bot-channel');
   // if(!botschannel) return;

   if(msg.startsWith (prefix + "quote")) {
     number = 41;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
        case 1: message.channel.send ("You remind me of a puppy, just like Momo. No, maybe you're more like a tiny baby rabbit?"); break;
        case 2: message.channel.send ("I'm a vegetarian. Not for spiritual reasons, just because I prefer that sort of food."); break;
        case 3: message.channel.send ("If I have the time to eat breakfast, I'd rather spend it sleeping..."); break;
        case 4: message.channel.send ("I've used the \"relative's funeral\" excuse so many times over my school years that I don't remember how much of my family is supposed to be dead by now. I need to come up with something else. \nMaybe I'll go with some kind of illness."); break;
        case 5: message.channel.send ("What were we talking about again? How great I am at cooking?"); break;
        case 6: message.channel.send ("Aren't you tired of looking at this bespectacled man by now? How about someone grown-up, and a classic *ikemen*?"); break;
        case 7: message.channel.send ("I'll tell you as much personal information as you want. First, should I tell you my three sizes?"); break;
        case 8: message.channel.send ("If it is true that we are what we eat, then I am made of very strong vegetables."); break;
        case 9: message.channel.send ("Since I have someone who keeps praising me with \"ikemen, ikemen\", that's probably how I can stay beautiful. I'm a \"Praise me and I'll grow\" type after all."); break;
        case 10: message.channel.send ("Momo says that Re:vale's success is thanks to me, but it's probably thanks to Momo."); break;
        case 11: message.channel.send ("I wanted to sing songs. The reason I went the direction of an idol was... because of my face? lol"); break;
        case 12: message.channel.send ("Let Satsujin know that I'll be doing fanservice for him."); break;
        case 13: message.channel.send ("Sorry if I keep you up all night."); break;
        case 14: message.channel.send ("Well, Re:vale always uses any means necessary to win. We have that motto."); break;
        case 15: message.channel.send ("I don’t care if they don’t love me. I want everything, from the lowliest of bugs to God himself, to love my songs. \nJust my songs. I only want the people who’ll treasure my songs to listen to them."); break;
        case 16: message.channel.send ("If I'm going outside, I'd rather do it after sunset."); break;
        case 17: message.channel.send ("All of Re:vale, including Okarin, are sadists. Chemistry-wise, we make a terrible combination."); break;
        case 18: message.channel.send ("So all I need to do is follow him home without being noticed..."); break;
        case 19: message.channel.send ("What I like about myself.\nThe first thing that comes to mind is that I've been singing for over 10 years now.\nI never stopped, even when I was going through hard times. It's all thanks to Momo, Ban, and Okarin, though."); break;
        case 20: message.channel.send ("Emotions are something that can't be seen, yet easily changeable, unstable things. I'm sure your environment growing up is what make you this way. \nYou have nothing to be afraid of. You can come right at us."); break;
        case 21: message.channel.send ("I’m ordinary, you know. To the point where there's no one else as ordinary as me."); break;
        case 22: message.channel.send ("\"We, the Incomplete\"...\nI forgot that was Momo's favorite song. \n...Even though he was so happy about it...\nIf something falls down next to me while I'm singing that song... I can't. Not again- I wouldn't be able to bear it.\n...I wonder... Does he want to sing it, or does he want to listen to it? \nI'm sure he can't decide."); break;
        case 23: message.channel.send ("In a world that became pitch black, I decided to be the leading light for everyone and ran ahead. Behind me, countless lights were born and became the path. Let's shine brightly on the past and future, and see the next world."); break;
        case 24: message.channel.send ("I thought I'd become a light that would run ahead of anyone. Let's dazzingly illuminate the page and present and go to the next world."); break;
        case 25: message.channel.send ("It's always fun when you're with me. It's all right to come to my place more often without holding back."); break;
        case 26: message.channel.send ("Ask me anything, if it's from you I'll consider anything. Like my body measurements, if your want. The color of my underwear is also fine."); break;
        case 27: message.channel.send ("By the way, my three sizes are... "); break;
        case 28: message.channel.send ("As expected, I'm also pleased."); break;
        case 29: message.channel.send ("I'm going to imitate Momo. Yay~! You did it!"); break;
        case 30: message.channel.send ("What's wrong that you can't even do something like this?"); break;
        case 31: message.channel.send ("We're going to have a secret intensive training session together."); break;
        case 32: message.channel.send ("I hate how cold the winter is, but as long as Satsujin is celebrating with me, I'll do my best."); break;
        case 33: message.channel.send ("Oh? I didn't think Gaku-kun was such a cherry boy."); break;
        case 34: message.channel.send ("Wake me up, lovely heart!"); break;
        case 35: message.channel.send ("You've shared your warmth with me, and in return I want to make you happy."); break;
        case 36: message.channel.send ("I feel like crying, ad there's an overwhelming warmth coming from inside me. I never thought I'd be capable of this sort of compassion."); break;
        case 37: message.channel.send ("I thought that smilign even when I wasn't enjoying myself was like being enslaved. But that's not true. Smiling is kindness. Being with you makes me happy."); break;
        case 38: message.channel.send ("Having to be thoughtful and considerate had always annoyed me. But that night these things became the warmth that sustained us both."); break;
        case 39: message.channel.send ("I really am lucky. Now I know joy, and the meaning of a smile.\nI also know the miracle of having someone waiting for me when I return home."); break;
        case 40: message.channel.send ("I live in a constant state of may blues."); break;
        case 41: message.channel.send ("☆-(´>ω・`)b"); break;
      }
     }

   if (msg.startsWith ("good morning yuki")) {
    let modRole = message.guild.roles.find(role => role.name === 'YUKILOVER69.');
    if(message.member.roles.has(modRole.id)) {
        return message.channel.send("Ah, Satsujin, I thought you were an angel for a moment...");
    } else {
        return message.channel.send("Good morning. I wish I could sleep for 8 hours.");
      }
     }

   if(msg.startsWith (prefix + "smooch")) {
      if(message.author.id != "182723698711592960") return;
      number = 3;
      var random = Math.floor (Math.random() * (number)) + 1;
      switch (random) {
        case 1: message.channel.send ("Fufu... You're being affectionate today. Come here."); break;
        case 2: message.channel.send ("My heart races in more ways than one when you do that, you know?"); break;
        case 3: message.channel.send ("I feel like I've received a special reward. I'm glad to be alive."); break;
      }
     }

   if (msg.startsWith ("i love you yuki")) {
     if(message.author.id != "182723698711592960") return;
     number = 5;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
       case 1: message.channel.send ("I love you too, Satsujin. I don't know how to put into words how happy I am with you."); break;
       case 2: message.channel.send ("I would like you to keep loving me, and only me, forever from now on. And I'll make sure to keep charming you."); break;
       case 3: message.channel.send ("I know. I love you too, darling~"); break;
       case 4: message.channel.send ("Being with you is so much fun. Thank for you everything, now and forever."); break;
       case 5: message.channel.send ("You've shared your warmth with me, and in return I want to make you happy."); break;
     }
    }

   if (msg.startsWith (prefix + "scout")) {
     number = 55;
     imageNumber = Math.floor (Math.random() * (number)) + 1;
     return message.channel.send ({files: ["./images/scout/" + imageNumber + ".png"]})
    }

   if(cmd === `${prefix}mofumofu` || cmd === `${prefix}mofu`){
      number = 7;
      imageNumber = Math.floor (Math.random() * (number)) + 1;
      return message.channel.send ({files: ["./images/mofumofu/" + imageNumber + ".png"]})
     }

   if (msg.startsWith (prefix + "send")) {
     if (mention == null) { return; }
      message.delete();
      mentionMessage = message.content.slice(6);
      mention.send (mentionMessage);
    }

   if (msg.startsWith (prefix + "clear")) {
      if(message.author.id != "182723698711592960") return;
      if(!args[0]) return message.channel.send("oof.");
      message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(3000));
     });
    }

   if (msg.startsWith (prefix + "say")) {
      let botmessage = args.join(" ");
      message.delete().catch();
      return message.channel.send(botmessage);
    }

   if (msg.startsWith ("hey gays")) {
    return message.channel.send("And Gaku.");
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

   if (msg.startsWith ("good night yuki")) {
    return message.channel.send("Good kids should head to sleep early.");
   }

   if (msg.startsWith (prefix + "cat")) {
       number = 2;
       var random = Math.floor (Math.random() * (number)) + 1;
       switch (random) {
         case 1: message.channel.send ({files:["./images/cat.png"]}); break;
         case 2: message.channel.send ({files:["./images/eat_veggie.png"]}); break;
       }
   }

   if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
   }

   if (msg.startsWith (prefix + "leaf")) {
    message.react('🍃');
    return message.channel.send("Babe, that me leaf 🍃");
   }

   if (msg.startsWith (prefix + "ryo")) {
    return message.channel.send("Oh fuck. Bastard spotted.");
   }

   if(cmd ===`${prefix}help`){
      let helpembed = new Discord.RichEmbed()
      .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
      .setColor("#00ff67")
      .addField("Commands:","**y!yuki** *<question>* | Ask him anything. \n**y!send** *<@user> <message>* | Send a DM to the mentioned user\n**y!scout** | Solo Yolo \n**y!quote** | Random quote\n**y!say** *<message>* | Have the bot say anything you want\n**y!help** | Displays this help message\n**y!cards** | List of cards")
      .addField("Basic y!commands:", "mafia (alias:maf) | leaf | ryo | car | smooch | cat | mofu")
      .addField("Command phrases:", "I can't believe Ryo is dead | I'm gonna munch | I love you Yuki | Good morning Yuki | Good night Yuki | Yuki if you're out there | Hey gays")
    return message.channel.send(helpembed);
    }

   if (msg.startsWith (prefix + "cards")) {
     let cardsembed = new Discord.RichEmbed()
       .setDescription("Command usage: y!cardname")
       .setColor("#00ff67")
       .addField("SSRs:", "bMAGA! in Manami Nature Park | alt: bno \nValentine Great Escape \nAinana Roman \nOrdinary Days \nMonster \nWork\nGothic Halloween \nNo Doubt \nRabbit Ears Parka \nDis One \nSweets \nRoad to Infinity | alt: rti \nHoliday Collection",true)
       .addField("SSRs:", "Absolute Champions \nTea Party\nXmas Magic\n Light Future \n Connected Feelings \nXmas Rock \nRe:vale Police | alt: Police\nWinter Wonderland Trip \nTaiyou no Esperanza | alt: Esperanza \nWhite Special Day | alt: white day \nCyber Techno | alt: vae\nGrand Extermination Operation + secret",true)
       .addField("Ichiban Kuji:", "Marchen Dream\n Happy Sparkle Star | alt: sparkle \n King Pudding\nCelestial Pilgrimage | alt: hoshi \nOrder please \nMechanical Lullaby | alt: mlullaby",true)
       .addField("URs:", "Kiseki \nMiddle of Rehearsal | alt: rehearsal\nHappy New Year | alt: New Year \n Music in your Thoughts | alt: Walker",true)
       .addField("Others", "Shuffle Talk \n Shuffle Talk 2018 \nSilver Sky\nDis One (group)")
       .setFooter("add sr/r to the end for other rarities. (ex: y!ordinary sr)");
     return message.channel.send(cardsembed);
   }

});

    bot.on("message", function(message) {
    msg = message.content.toLowerCase();
    if(!msg.startsWith(prefix)) return;
    // let botschannel = message.guild.channels.find(`name`, "bot-channel");
    // if(!botschannel) return;
    var args = message.content.substring(prefix.length).split();

    switch (args[0].toLowerCase()) {
// UR cards
      case "kiseki":
        return message.channel.send ({files:["./images/borderless/ur/kiseki.png"]});
      break;
      case "middle of rehearsal":
      case "rehearsal":
        return message.channel.send ({files:["./images/borderless/ur/rehearsal.png"]});
      break;
      case "music in your thoughts":
      case "walker":
        return message.channel.send ({files:["./images/borderless/ur/walker.png"]});
      break;
      case "music in your thoughts2":
      case "walker2":
        return message.channel.send ({files:["./images/borderless/ur/walker2.png"]});
      break;
      case "happy new year":
        case "new year":
        return message.channel.send ({files:["./images/borderless/ur/new_year.png"]});
      break;
// Ichiban Kuji Cards
      case "order please":
      case "order":
        return message.channel.send ({files:["./images/borderless/ichiban/order_please.png"]});
        break;
      case "marchen dream":
      case "marchen":
        return message.channel.send ({files:["./images/borderless/ichiban/marchen_dream.png"]});
      break;
      case "celestial pilgrimagen":
      case "hoshi":
      case "celestial":
      case "curse":
        return message.channel.send ({files:["./images/borderless/ichiban/celestial.png"]});
      break;
      case "happy sparkle star":
      case "sparkle":
        return message.channel.send ({files:["./images/borderless/ichiban/sparkle.png"]});
      break;
      case "king pudding":
        return message.channel.send ({files:["./images/borderless/ichiban/king_pudding.png"]});
      break;
      case "mechanical lullaby":
      case "mlullaby":
        return message.channel.send ({files:["./images/borderless/ichiban/lullaby.png"]});
      break;
// Other cards
      case "shuffle talk":
        return message.channel.send ({files:["./images/borderless/shuffle_talk.png"]});
      break;
      case "shuffle talk 2018":
        return message.channel.send ({files:["./images/borderless/shuffle_talk_18.png"]});
      break;
      case "silver sky":
        return message.channel.send ({files:["./images/borderless/silver_sky.png"]});
      break;
      case "dis one (group)":
        return message.channel.send ({files:["./images/borderless/disone.png"]});
      break;

// R cards
      case "ordinary days r":
      case "ordinary r":
        return message.channel.send ({files:["./images/borderless/r/ordinary_days.png"]});
      break;
      case "re:vale police r":
      case "police r":
        return message.channel.send ({files:["./images/borderless/r/police.png"]});
      break;
// SR cards
      case "rabbit ears parka sr":
      case "rabbit ears sr":
      case "rabbit sr":
        return message.channel.send ({files:["./images/borderless/sr/rabbit_ears.png"]});
      break;
      case "photobook sr":
      case "birthday photobook sr":
        return message.channel.send ({files:["./images/borderless/sr/birthday_photobook.png"]});
      break;
      case "no doubt sr":
        return message.channel.send ({files:["./images/borderless/sr/no_doubt.png"]});
      break;
      case "ordinary days sr":
      case "ordinary sr":
        return message.channel.send ({files:["./images/borderless/sr/ordinary_days.png"]});
      break;
      case "work sr":
        return message.channel.send ({files:["./images/borderless/sr/work.png"]});
      break;
      case "monster sr":
        return message.channel.send ({files:["./images/borderless/sr/monster.png"]});
      break;
      case "12 songs gift sr":
      case "12 songs sr":
        return message.channel.send ({files:["./images/borderless/sr/12_songs.png"]});
      break;
      case "re:vale police sr":
      case "police sr":
        return message.channel.send ({files:["./images/borderless/sr/police.png"]});
      break;
      case "middle of rehearsalssr":
      case "rehearsal sr":
        return message.channel.send ({files:["./images/borderless/sr/rehearsal.png"]});
      break;
      case "winter wonderland trip sr":
      case "winter wonderland sr":
        return message.channel.send ({files:["./images/borderless/sr/winter_wonderland.png"]});
      break;
// SSR Cards
      case "middle of rehearsal ssr":
      case "rehearsal ssr":
        return message.channel.send ({files:["./images/borderless/rehearsal.png"]});
      break;
      case "photobook":
      case "birthday photobook":
        return message.channel.send ({files:["./images/borderless/birthday_photobook.png"]});
      break;
      case "rabbit ears parka":
      case "rabbit ears":
      case "rabbit":
        return message.channel.send ({files:["./images/borderless/rabbit.png"]});
      break;
      case "tea party":
      case "tea":
        return message.channel.send ({files:["./images/borderless/tea_party.png"]});
      break;
      case "xmas magic":
        return message.channel.send ({files:["./images/borderless/xmas_magic.png"]});
      break;
      case "grand extermination operation":
      case "grand":
      case "extermination":
      case "splatoonish":
        return message.channel.send ({files:["./images/borderless/extermination.png"]});
      break;
      case "grand extermination operation secret":
      case "grand secret":
      case "extermination secret":
      case "splatoonish secret":
        return message.channel.send ({files:["./images/borderless/extermination.png"]});
      break;
      case "light future":
        return message.channel.send ({files:["./images/borderless/light_future.png"]});
      break;
      case "ordinary days":
      case "ordinary":
        return message.channel.send ({files:["./images/borderless/ordinary_days.png"]});
      break;
      case "work":
        return message.channel.send ({files:["./images/borderless/work.png"]});
      break;
      case "gothic halloween":
      case "gothic":
        return message.channel.send ({files:["./images/borderless/gothic_halloween.png"]});
      break;
      case "no doubt":
        return message.channel.send ({files:["./images/borderless/no_doubt.png"]});
      break;
      case "monster":
        return message.channel.send ({files:["./images/borderless/monster.png"]});
      break;
      case "ainana roman":
      case "taisho roman":
      case "taisho":
        return message.channel.send ({files:["./images/borderless/ainana_roman.png"]});
      break;
      case "zodiac":
        return message.channel.send ({files:["./images/borderless/zodiac.png"]});
      break;
      case "connected feelings":
      case "connected":
        return message.channel.send ({files:["./images/borderless/linked_feelings.png"]});
      break;
      case "xmas rock":
        return message.channel.send ({files:["./images/borderless/xmas_rock.png"]});
      break;
      case "bmaga":
      case "bno":
        return message.channel.send ({files:["./images/borderless/bno.png"]});
      break;
      case "re:vale police":
      case "police":
        return message.channel.send ({files:["./images/borderless/police.png"]});
      break;
      case "12 songs gift":
      case "12 songs":
        return message.channel.send ({files:["./images/borderless/12_songs_gift.png"]});
      break;
      case "absolute champions":
        return message.channel.send ({files:["./images/borderless/absolute_champions.png"]});
      break;
      case "dis one":
        return message.channel.send ({files:["./images/borderless/dis_one.png"]});
      break;
      case "sweets":
        return message.channel.send ({files:["./images/borderless/sweets.png"]});
      break;
      case "winter wonderland trip":
      case "winter wonderland":
        return message.channel.send ({files:["./images/borderless/winter_wonderland.png"]});
      break;
      case "taiyou no esperanza":
      case "esperanza":
        return message.channel.send ({files:["./images/borderless/esperanza.png"]});
      break;
      case "white special day":
      case "white day":
        return message.channel.send ({files:["./images/borderless/white_special_day.png"]});
      break;
      case "road to infinity":
      case "rti":
        return message.channel.send ({files:["./images/borderless/rti.png"]});
      break;
      case "cyber techno":
      case "vae":
        return message.channel.send ({files:["./images/borderless/vae.png"]});
      break;
      case "holiday collection":
        return message.channel.send ({files:["./images/borderless/holiday_collection.png"]});
      break;
    }
});

// bot.login(botconfig.token); // Delete this for Github + Use the line below instead
bot.login(process.env.token);
