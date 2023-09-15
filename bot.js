require("dotenv").config();  

  //import fetch from "node-fetch"; 
  const moment = require("moment-timezone"); 
  //const fetch = require("node-fetch"); 
  const axios = require("axios"); 
  const { BufferJSON, WA_DEFAULT_EPHEMERAL,MessageType, Mimetype, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia,  areJidsSameUser, getContentType, downloadMediaMessage } = require("@adiwajshing/baileys");  
  const fs = require("fs");
  const util = require("util");  
  const chalk = require("chalk");  
  const googleTTS = require("google-tts-api");
  const { Configuration, OpenAIApi } = require("openai");  
  const { DiscussServiceClient } = require("@google-ai/generativelanguage"); 
  const { GoogleAuth } = require("google-auth-library");
  const pm2 = require('pm2');
  const chokidar = require('chokidar');
  const eco = require('discord-mongoose-economy');
  const mongoDB = require("./lib/mongoDB");
  const ytdl = require('ytdl-core');
  const ytsr = require('ytsr');
  const vm = require('node:vm');
  const translate = require('translate-google-api');
  const os = require('os');
  const ffmpeg = require('fluent-ffmpeg');
  const crypto = require('crypto');
  
  module.exports = client = async (client, m, chatUpdate, store) => {  
    try {  
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";  

//let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
  
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//If you want a single prefix, you replace it with this = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await client.decodeJid(client.user.id)

const { parseMention } = require('./lib/myfunc.js');
 

//const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
//const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
//const participants = m.isGroup ? await groupMetadata.participants : ''
//const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
//const isBotAdmins = m.isGroup ? groupAdmins.includes(owner) : false
//const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//const welcmm = m.isGroup ? wlcmm.includes(from) : false 
//const AntiLink = m.isGroup ? ntilink.includes(from) : false 
//const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
//const isBan = banned.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const qtod = m.quoted? "true":"false"
const owner = "919142294671";

const MODE = process.env.MODE;

//const thinking = await client.sendMessage(m.chat, { text: 'Thinking...' }); 
const BOT_NAME = process.env.BOT_NAME || 'GSS Botwa'
const OWNER_NAME = process.env.OWNER_NAME || 'Goutam'
const APIKEY = process.env.APIKEY;
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]


const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const isEval = body.startsWith('=>')
 
//=================================================//}  
//  Bot Prosess Time
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);
//Uptime
  const uptimeMessage = `*I am alive now since ${hours}h ${minutes}m ${seconds}s*`;
           //TIME Wisher 
 const xtime = moment.tz('Asia/Colombo').format('HH:mm:ss') 
 const xdate = moment.tz('Asia/Colombo').format('DD/MM/YYYY') 
 const time2 = moment().tz('Asia/Colombo').format('HH:mm:ss')   
   if(time2 < "23:59:00"){ 
 var pushwish = `Good Night 🌌` 
  } 
  if(time2 < "19:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "18:00:00"){ 
 var pushwish = `Good Evening 🌃` 
  } 
  if(time2 < "15:00:00"){ 
 var pushwish = `Good Afternoon 🌅` 
  } 
  if(time2 < "11:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  } 
  if(time2 < "05:00:00"){ 
 var pushwish = `Good Morning 🌄` 
  }  
    
  

//const sendMsg = await sock.sendMessage(id, reactionMessage)
    //  const from = m.chat;  
      const reply = m.reply;  
      //const sender = m.sender;  
     // const mek = chatUpdate.messages[0];  
  
      const color = (text, color) => {  
        return !color ? chalk.green(text) : chalk.keyword(color)(text);  
      };  
  



function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function loading () {
var goutamload = [
`ㅤʟᴏᴀᴅɪɴɢ
《 █▒▒▒▒▒▒▒▒▒▒▒》10%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ████▒▒▒▒▒▒▒▒》30%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ███████▒▒▒▒▒》50%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ██████████▒▒》80%`,
`ㅤʟᴏᴀᴅɪɴɢ
《 ████████████》100%`,
"ʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇ"
]
let { key } = await client.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < goutamload.length; i++) {
//await delay(10)

    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: goutamload[i]
        }
      }
    }, {});
}}  
  

if (process.env.REACODING || 'true' === 'true' && command) {
client.sendPresenceUpdate('composing', from)
}
if (process.env.AUTO_READ || 'true' === 'true' && command) {
client.readMessages([m.key])
}
if (process.env.ALWAYS_ONLINE || 'false' === 'false') { 
  client.sendPresenceUpdate('available', m.chat) 
}
else {
  client.sendPresenceUpdate('unavailable', m.chat)
}
        
      if (isCmd) {  
        switch (command) {  
          case "menu":  
const reactionMessage = {
            react: {
                text: "🕐", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "📑", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage);              
    // let thumb = "./me.jpg"; 
     let me = m.sender 


 await loading()
   await m.reply(`
╭◯━━━━━━━━━━━━━◯
│    ${BOT_NAME}  
╰◯━━━━━━━━━━━━━◯
│ Hi 👋 *${pushname}*
╭◯━━━ *User Info* ━━━◯
│ 🧑 - *Name*: ${pushname}   
│ 📞 - *Number*: @${me.split('@')[0]}
│ ✅ - *Premium*: ✅        
╰◯━━━━━━━━━━━━◯

╭◯━━ *Time Info* ━━◯
│ ⏰ - *Time*: ${xtime}   
│ 📅 - *Date*: ${xdate}   
╰◯━━━━━━━━━━━━━━━━◯

╭◯━━━━━ *Help* ━━━━━◯
│ 🆘 - Please Type */help* 
╰◯━━━━━━━━━━━━━━━━◯

╭◯━ *Bot Commands* ━━━━━◯
│ 1️⃣ - .gpt 🅕 - 
│ 2️⃣ - .img 🅕 - 
│ 3️⃣ - .dall 🅕 -   
╰◯━━━━━━━━━━━━━━━━◯

╭◯━━━ *Bard* ━━━━━◯
│ 🎭 - .bard 🅕           
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Tools Menu* ━━━━━◯
│ 🗣 - .tts 🅕
│ 📋 - .delete 🅕
│ 🌐 - .translate 🅕
│ ℹ️ - .info 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Group Menu* ━━━━━◯
│ 🚫 - .kick @user
│ ➕ - .add @user
│ 👑 - .promote @user
│ 👤 - .demote @user
│ 📣 - .group off / on
│ 🔗 - .linkgc
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Owner Menu* ━━━━━◯
│ ✏️ - .setname 🅕
│ 📝 - .setbio 🅕
│ 🚫 - .block 🅕
│ ✅ - .unblock 🅕
│ 😴 - .sleep 🅕
│ 🔁 - .autoread 🅕
│ 🌐 - .self 🅕
│ 🌍 - .public 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Bug Reporting* ━━◯
│ 🐞 - .bug 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━━ *Sticker Menu* ━━━◯
│ 🎨 - .sticker 🅕          
╰◯━━━━━━━━━━━━━◯

╭◯━━━━ *Search Menu* ━━━━━◯
│ 🔍 - .google 🅕
│ 📷 - .insta 🅕
│ 📦 - .apk 🅕
│ 🎬 - .yts
│ 🌦️ - .weather 🅕
│ 🎵 - .lyrics 🅕
│ 🕵️️ - .githubstalk 🅕
│ 👤 - .igs 🅕
╰◯━━━━━━━━━━━━━◯

╭◯━ *Downloaders* ━◯
│ 🎬 - video  
│ 🎵 - song
╰◯━━━━━━━━━━━━━◯
╭◯━*Anime (18+)*━━━━◯
│ 🍑 - .hentai 🅕 
│ 😺 - .neko  🅕 
│ 🙇♂️ - .trap   🅕 
│ 💦 - .gasm 🅕 
│ 😮 - .ahegao 🅕 
│ 🍑 - .ass 🅕 
│ 🔞 - .bdsm 🅕 
│ 👄 - .blowjob 🅕 
│ 👀 - .cuckold 🅕 
│ 💦 - .cum 🅕
│ 👩🦰 - .milf 🅕 
│ 🦄 - .eba 🅕 
│ 💋 - .ero 🅕 
│ 👠 - .femdom 🅕 
│ 👣 - .foot 🅕 
│ 🥂 - .gangbang 🅕
│ 👓 - .glasses 🅕 
│ 🎸 - .jahy 🅕 
│ 🍆 - .masturbation 🅕 
│ 📚 - .manga   🅕 
│ 😼 - .neko-hentai  🅕 
│ 😽 - .neko-hentai2 🅕 
│ 🍭 - .nsfwloli 🅕 
│ 🎉 - .orgy 🅕 
│ 👙 - .panties 🅕 
│ 🍑 - .pussy 🅕 
│ 🐙 - .tentacles 🅕
│ 🦵 - .thighs 🅕 
│ 👭 - .yuri 🅕 
│ 🩱 - .zettai 🅕 
╰◯━━━━━━━━━━━━━◯
          `);
    
break;
            
                case 'opentime': {
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
client.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
}
break

case 'closetime': {
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return reply('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
reply(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
client.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
}
break
  
                

    case 'deleteall': case 'delall': case 'delete': case 'del': {
client.sendMessage(from, { react: { text: "🫡" , key: m.key }})

if (!m.quoted) return reply('Please mention a message')
let { chat, fromMe, id} = m.quoted

const key = {
 remoteJid: m.chat,
 fromMe: false,
 id: m.quoted.id,
 participant: m.quoted.sender
}

await client.sendMessage(m.chat, { delete: key })
}
break;
case 'yts':
case 'ytsearch': {
    if (!args.join(" ")) {
        return client.sendMessage(from, `Example: -yts Heat waves`, m.id); // Fix message sending
    }

    const yts = require("youtube-yts");

    try {
        const search = await yts(args.join(" "));
        const text = args.join(" ");
        let teks = `**YouTube Search Results for: ${text}**\n\n`;

        if (search.all.length === 0) {
            teks += "No results found for the given search query.";
        } else {
            search.all.forEach((result, index) => {
                teks += `**Result No: ${index + 1}**\n\n` +
                    `**Title:** ${result.title}\n` +
                    `**Views:** ${result.views}\n` +
                    `**Duration:** ${result.timestamp}\n` +
                    `**Uploaded:** ${result.ago}\n` +
                    `**Author:** ${result.author.name}\n` +
                    `**URL:** ${result.url}\n\n`;
            });
        }

        // Send the results in a more readable format
        client.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, m);
    } catch (error) {
        console.error("Error searching YouTube:", error);
        client.sendMessage(from, "An error occurred while searching YouTube.");
    }
    break;
}


case 'ping': {
  const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "📌",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 
  const startTime = new Date();
  const pingMsg = await client.sendMessage(m.chat, { text: 'cheking...' });

 await client.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `Respond Speed: ${new Date() - startTime} ms`
        }
      }
    }, {});
  } 
break;

case 'cal':
case 'calc':
case 'calcular':
case 'calculadora':
  try {
    let id = m.chat;
    client.math = client.math ? client.math : {};

    if (id in client.math) {
      clearTimeout(client.math[id][3]);
      delete client.math[id];
      return m.reply('...');
    }

    let val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI.]/g, '') // Allow decimal point '.'
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-');

    let format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×');

    let result = (new Function('return ' + val))();

    if (isNaN(result)) throw new Error('Invalid result');

    m.reply(`*${format}* = _${result}_`);
  } catch (error) {
    // Handle specific error messages
    if (error instanceof SyntaxError) {
      return m.reply('Invalid syntax. Please check your expression.');
    } else if (error instanceof Error) {
      return m.reply(error.message);
    } else {
      // Handle unexpected errors
      return m.reply('An unexpected error occurred.');
    }
  }
  break;
                
case 'support': case 'supportgc': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "🆘️",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

      
    reply(`⚙ *My developer's group:* ⚙ https://chat.whatsapp.com/D0gWJtzBLsVFKHgDXYVnPM`)
    }
    break;
    

case 'runtime':
case 'alive': {
  const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👀", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage);
  await m.reply(uptimeMessage);
}
break;

case 'weather':
        client.sendMessage(from, { react: { text: "✨", key: m.key }}) 
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        client.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;
        

case 'lyrics': {
  const reactionMessage = {
            react: {
                text: "🔍",
                key: m.key
            }
        }
        const successReactionMessage = {
            react: {
                text: "🎼", 
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
    m.reply('please wait...')	
if (!text) return reply(`Comand usage: ${prefix}lyrics Thunder`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break;




 case 'bard': 
   if (!text) throw `*Chat With Bard AI*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`;  
 const thinking = await client.sendMessage(m.chat, { text: 'Thinking...' }); 
 const MODEL_NAME = "models/chat-bison-001"; 
 const API_KEY = process.env.API_KEY; 
  
 const clint = new DiscussServiceClient({ 
   authClient: new GoogleAuth().fromAPIKey(API_KEY), 
 }); 
  
 async function main() { 
   const result = await clint.generateMessage({ 
     model: MODEL_NAME, // Required. The model to use to generate the result. 
     temperature: 0.5, // Optional. Value `0.0` always uses the highest-probability result. 
     candidateCount: 1, // Optional. The number of candidate results to generate. 
     prompt: { 
       // optional, preamble context to prime responses 
       context: "Respond to all the question in good manner.", 
       // Optional. Examples for further fine-tuning of responses. 
  
       // Required. Alternating prompt/response messages.
       messages: [{ content: text }], 
     }, 
  }); 
      
 // await m.reply(`${result[0].candidates[0].content}`);  
    await client.relayMessage(m.chat, {
      protocolMessage: {
        key: thinking.key,
        type: 14,
        editedMessage: {
          conversation: result[0].candidates[0].content
        }
      }
    }, {});
  
 } 
  
 main(); 
 break;


case 'setbio':{
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👤",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

if (!text) return m.reply(`Example: ${prefix + command} Hello World`)
    await client.updateProfileStatus(text)
    m.reply(`Bio Sucsessfully changed 2 ${text}`)
    }
 break;
  
case 'setname':{

if (!text) return m.reply(`Where is the name?\nExample: ${prefix + command} Goutam`)
    await client.updateProfilename(text)
    m.reply(`Bot Name Sucsessfully changed 2 ${text}`)
    }
break;

case 'apk': case 'yts': case 'sticker':
  m.reply("This feature is Comming Soon");
break;


  

const languages = require('./lib/languages'); // Import the language codes module

// Function to validate language code
function isValidLanguageCode(code) {
    return (code);
}

// Command handler for 'say', 'tts', and 'gtts'
case 'say':
case 'tts':
case 'gtts': {
    if (!args[0] || !text) {
        return m.reply('Usage: .say <language code> <text>');
    }

    const langCode = args[0]; // Language code provided by the user
    const textToSpeak = args.slice(1).join(" "); // Get the text to speak

    // Validate the language code
    if (!isValidLanguageCode(langCode)) {
        return m.reply('Invalid language code. Please provide a valid language code.');
    }

    // Generate the audio URL using the specified language code and text
    const audioUrl = googleTTS.getAudioUrl(textToSpeak, {
        lang: langCode,
        slow: false,
        host: "https://translate.google.com",
    });

    // Send the audio message
    return client.sendMessage(m.chat, {
        audio: {
            url: audioUrl,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
}
break;





function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
 

// Define the command
case 'info': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "💻",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 
  // Gather system information
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const hostname = os.hostname();
  const uptime = process.uptime();
  const cpuCount = os.cpus().length;
  const loadAvg = os.loadavg();
  const timestamp = performance.now();

  // Calculate memory usage
  const usedMemory = totalMemory - freeMemory;
  const memoryUsagePercent = ((usedMemory / totalMemory) * 100).toFixed(2);

  // Format the response
  const response = `
  System Information:
  - Hostname: ${hostname}
  - Uptime: ${uptime.toFixed(2)} seconds
  - Total Memory: ${formatBytes(totalMemory)}
  - Used Memory: ${formatBytes(usedMemory)} (${memoryUsagePercent}%)
  - CPU Count: ${cpuCount}
  - Load Average (1 min): ${loadAvg[0].toFixed(2)}

  Response Speed: ${(performance.now() - timestamp).toFixed(4)} milliseconds
  `;

  // Send the response
  m.reply(response);
}
break;

case 'insta': case 'ig': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "✔",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

if (!args[0]) return m.reply(`Enter Instagram Username\n\nExample: ${prefix + command} world_reacode_egg`)

const igs = require('api-dylux')
    try {
    let res = await igs.igStalk(args[0])
    let te = `
┌──「 *Information* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await client.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        m.reply(`Make sure the username comes from *Instagram*`)
      }
}
break;
  
 case "img": 
   await loading()
   if (!text) throw `*This command generates image from texts*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} elon musk in pink output*`;  
  
    try {  
      m.reply('*Please wait, generating images...*');  
  
      const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${text}&model=art`;  
      const response = await fetch(endpoint);  
      const data = await response.json();  
  
      if (data.result && Array.isArray(data.result)) {  
        for (let i = 0; i < Math.min(data.result.length, 2); i++) {  
          const imageUrl = data.result[i];  
          const imageResponse = await fetch(imageUrl);  
          const imageBuffer = await imageResponse.buffer();  
          console.log(response); 
          await client.sendImage(from, imageBuffer, text, mek);  
        }  
      } else {  
        throw '*Image generation failed*';  
      }  
    } catch {  
      throw '*Oops! Something went wrong while generating images. Please try again later.*';  
    }  
  
 break;
  
case 'google': {
const reactionMessage = {
            react: {
                text: "🔍",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👍",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

if (!q) return m.reply(`Example : ${prefix + command} ${botname}`)

let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break;

case 's': case 'sticker': case 'stiker': {

if (!quoted) return m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)

if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break;


case 'bug': case 'request': case 'report': {
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "🐞",
                key: m.key
            }
        }
        await client.sendMessage(m.chat, successReactionMessage); 

	if (!text) return m.reply(`Example : ${

        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                client.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            client.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break;

// ...

case "ai": case "gpt":   
  const think = await client.sendMessage(m.chat, { text: 'Thinking...' }); 

           try {  
              if (!process.env.OPENAI_API_KEY) return reply("Aabe Api key to dal de");  
              if (!text) return reply(`*Chat With ChatGPT*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`);  
  
              const configuration = new Configuration({  
                apiKey: process.env.OPENAI_API_KEY,  
              });  
              const openai = new OpenAIApi(configuration);  
  
              const response = await openai.createChatCompletion({  
            model: "gpt-3.5-turbo",  
            messages: [{role: "user", content: text}],  
            });  
           // m.reply(`${response.data.choices[0].message.content}`);
         await client.relayMessage(m.chat, {
            protocolMessage: {
             key: think.key,
             type: 14,
             editedMessage: {
          conversation: response.data.choices[0].message.content
        }
      }
    }, {});
            } catch (error) {  
            if (error.response) {  
              console.log(error.response.status);  
              console.log(error.response.data);  
              console.log(`${error.response.status}\n\n${error.response.data}`);  
            } else {  
              console.log(error);  
              m.reply("Erroring :"+ error.message);  
            }  
          }  
            break;




  
          case "dalle":
  try {
    if (!text) throw `*यह कमांड पाठ से छवियाँ उत्पन्न करता है*\n\n*����xample usage*\n*��� ${usedPrefix + command} Beautiful animegirl*\n*��� ${usedPrefix + command} elon musk in pink output*`;

    m.reply('*कृपया प्रतीक्षा करें, छवियाँ उत्पन्न हो रही हैं...*');

    const endpoint = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(text)}&model=art`;
    const response = await fetch(endpoint);
    const data = await response.json();

    if (data.result && Array.isArray(data.result)) {
      for (let i = 0; i < Math.min(data.result.length, 2); i++) {
        const imageUrl = data.result[i];
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.buffer();
        await client.sendImage(m.chat, imageBuffer, null, null, mek);
      }
    } else {
      throw '*छवि उत्पन्न करने में विफल*';
    }
  } catch {
    throw '*ओह! छवियाँ उत्पन्न करते समय कुछ गलत हो गया। कृपया बाद में पुन: प्रयास करें*';
  }
  break;

case 'ahegao':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ahegao.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ass':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/ass.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'bdsm':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/bdsm.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'milf':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/milf.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'blowjob':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/blowjob.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cuckold':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cuckold.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'cum':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/cum.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'eba':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/eba.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'ero':

loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'femdom':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/femdom.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'foot':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/foot.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'gangbang':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gangbang.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'glasses':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/glasses.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'hentai':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/hentai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'jahy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/jahy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'manga':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/manga.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'masturbation':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/masturbation.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai':
case 'neko':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'neko-hentai2':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/neko2.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'nsfwloli':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/nsfwloli.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'orgy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/orgy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'panties':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/panties.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'pussy':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/pussy.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'tentacles':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/tentacles.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'thighs':
case 'trap':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/thighs.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'yuri':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/yuri.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;
case 'zettai':
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/zattai.json'))
var nsfwresult = pickRandom(botwansfw)
client.sendImage(from, nsfwresult, pushname, mek)
break;

case 'gifblowjob':
//if (!m.isGroup) return m.reply("only work in group");
//if xufufzitx
loading()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await client.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;

case 'gifhentai':
//if (!m.isGroup) return m.reply("only work in group");
//if xufufzitx
loading()
var botwansfw = JSON.parse(fs.readFileSync('./media/nsfw/gifs.json'))
var nsfwresultx = pickRandom(botwansfw)
    await client.sendMessage(m.chat,{video:nsfwresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break;

case 'promote': {
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Promote the user in the group
    await client.groupParticipantsUpdate(from, [users], "promote")
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been promoted to admin.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while promoting the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        });
    break;
}

case 'autoread': {
  if (!args[0]) return reply(`Send the command with options: on or off. Example: ${prefix}${command} on`);

  if (args[0].toLowerCase() === 'on') {
    AUTO_READ = true;
  } else if (args[0].toLowerCase() === 'off') {
    AUTO_READ = false;
  } else {
    reply('Invalid option. Use "on" or "off".');
  }
  break;
}

                case 'song':
case 'music':
case 'ytmp3':
case 'mp3':
case 'y2mp3':
          const gettRandom = (ext) => { 
             return `${Math.floor(Math.random() * 10000)}${ext}`; 
         }; 
  
         if (text.length === 0) { 
             m.reply(`❌ URL is empty! \nSend ${prefix}song Video URL`); 
             return; 
         } 
         try { 
             let urlYt = text; 
             if (!urlYt.startsWith("http")) { 
                 m.reply(`❌ Give youtube link!`); 
                 return; 
             } 
             let infoYt = await ytdl.getInfo(urlYt); 
             let titleYt = infoYt.videoDetails.title; 
             let randomName = gettRandom(".mp3"); 
             const stream = ytdl(urlYt, { 
                     filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128, 
                 }) 
                 .pipe(fs.createWriteStream(`./${randomName}`)); 
             await new Promise((resolve, reject) => { 
                 stream.on("error", reject); 
                 stream.on("finish", resolve); 
             }); 
  
             let stats = fs.statSync(`./${randomName}`); 
             let fileSizeInBytes = stats.size; 
             let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024); 
              { 

                 let audioMsg = { 
                     audio: fs.readFileSync(`./${randomName}`), 
                     mimetype: 'audio/mp4', 
                     fileName: titleYt + ".doc", 
                     ptt: false,
                  
                 } 
                 await client.sendMessage(m.chat, audioMsg, { quoted: m }) 
                 return fs.unlinkSync(`./${randomName}`); 
             } 
             fs.unlinkSync(`./${randomName}`); 
         } catch (e) { 
             console.log(e) 
         } 
  
break;
                case 'video':
case 'ytmp4':
case 'mp4':
case 'y2mp4':
              const getRandom = (ext) => { 
                 return `${Math.floor(Math.random() * 10000)}${ext}`; 
             };
              if (!text) { 
                 m.reply(`❌Please provide me a url`); 
                 return; 
             } 
             try { 
                 let urlYt = text; 
                 if (!urlYt.startsWith("http")) return m.reply(`❌ Give youtube link!`); 
                 let infoYt = await ytdl.getInfo(urlYt); 
                 let titleYt = infoYt.videoDetails.title; 
                 let randomName = getRandom(".mp4"); 
  
                 const stream = ytdl(urlYt, { 
                         filter: (info) => info.itag == 22 || info.itag == 18, 
                     }) 
                     .pipe(fs.createWriteStream(`./${randomName}`)); 
                 await new Promise((resolve, reject) => { 
                     stream.on("error", reject); 
                     stream.on("finish", resolve); 
                 }); 
                 let stats = fs.statSync(`./${randomName}`); 
                 let fileSizeInBytes = stats.size; 
                 let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024); 
                  { 

       // User ko Video Vejne ka Code
      client.sendMessage(
          from,
          {
            video: fs.readFileSync(`./${randomName}`), 
         //   video: { url: videoUrl },
            caption: `Title : ${titleYt}\n By: *Gss_Botwa*`,
          },
          { quoted: m }
        );
             // Send karne ke bad Delete karne ka Code
              return fs.unlinkSync(`./${randomName}`); 
                 }
                 return fs.unlinkSync(`./${randomName}`);       
             } catch (e) { 
                 console.log(e) 
             } 
break;


case 'linkgc': {
    try {
        // Generate the group invite link
        const inviteCode = await client.groupInviteCode(from);

        // Create the full invite link
        const inviteLink = 'https://chat.whatsapp.com/' + inviteCode;

        // Reply with the invite link
        reply(inviteLink);
    } catch (error) {
        console.error("Error generating group invite link:", error);
        reply("Error generating group invite link.");
    }
    break;
}


 case 'group': {

    if (args[0] == "off") {
        // Disable group announcements
        await client.groupSettingUpdate(from, 'announcement', false);
        reply("Group announcements turned off.");
    } else if (args[0] == "on") {
        // Enable group announcements
        await client.groupSettingUpdate(from, 'not_announcement', true);
        reply("Group announcements turned on.");
    } else {
        reply(`Send the command #${command} _options_\nOptions: on & off\nExample: ${prefix + command} on`);
    }
    break;
 }
    
case 'demote': {
    try {
        // Check if it's a group chat
        // Extract the user to be demoted (from mention or quoted message)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        if (!users) {
            return reply(`*Usage*\n${prefix + command} @tag`);
        }

        // Demote the user in the group
        await client.groupParticipantsUpdate(from, [users], "demote");

        reply(`User ${users} has been demoted.`);
    } catch (error) {
        console.error("Error demoting user:", error);
        reply("An error occurred while demoting the user.");
    }
    break;
}
// Define an async function to mention all group members

case 'block': {
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to block the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'block');
  } catch (error) {
    console.error("Error blocking user:", error);
    reply("An error occurred while blocking the user.");
  }
  break;
}

case 'unblock': {
  try {
    // Check if there is no text and no quoted message
    if (!text && !m.quoted) return reply(`🚩 Mention or Reply chat target.`);

    let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : text.split`@`[1]) : text;

    // Check if 'number' is not a valid number
    if (isNaN(number)) return reply(`🚩 Invalid number.`);

    // Check if 'number' length is greater than 15
    if (number.length > 15) return reply(`🚩 Invalid format.`);

    let user;

    // Check if 'text' is provided
    if (text) {
      user = number + '@s.whatsapp.net';
    }
    // Check if 'm.quoted.sender' exists
    else if (m.quoted.sender) {
      user = m.quoted.sender;
    }
    // Check if 'm.mentionedJid' exists
    else if (m.mentionedJid) {
      user = number + '@s.whatsapp.net';
    }

    // Check if the user is trying to unblock the bot itself
    if (user == client.user.id.split(':')[0] + 's.whatsapp.net') return reply(`🚩 ??`);

    // Update the block status
    client.updateBlockStatus(user, 'unblock');
  } catch (error) {
    console.error("Error unblocking user:", error);
    reply("An error occurred while unblocking the user.");
  }
  break;
}

case 'translate': {
  try {
    if (!text) return m.reply(isPrefix, command, 'id what is translater');
    if (text && m.quoted && m.quoted.text) {
      let lang = text.slice(0, 2);
      try {
        let data = m.quoted.text;
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    } else if (text) {
      let lang = text.slice(0, 2);
      try {
        let data = text.substring(2).trim();
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    }
  } catch (error) {
    console.error("Error in 'translate' command:", error);
    m.reply(` An error occurred while translating.`);
  }
  break; // Case break statement
}
function isUrl(str) {
}

case 'git': case 'gitclone':
if (!args[0]) return reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGXeon/XeonMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcxeon(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
                
case 'self': {
        client.sendMessage(from, { react: { text: "🔐" , key: m.key }})
        client.public = false
        reply('mode changed in to private. only admin can use me!')
        client.setStatus(`Mode : Self`)
        }
        break;

case 'public': {
        client.sendMessage(from, { react: { text: "🔓" , key: m.key }})
        client.public = true
        reply('mode changed in to public. now all user user me!')
        client.setStatus(`Mode : Public`)
        }
        break;
        
case 'tinyurl':{
   if(!q) return reply('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
// Define the sleep function
// Define the sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let isSleeping = false; // Variable to track if the bot is sleeping

// Your command handler function
// Define the sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Your command handler function
case 'shutdown': case 'sleep':
    await client.sendMessage(from, { react: { text: "⚠️" , key: m.key }});

    reply(`Okey bye time to sleep!`);
    await sleep(5000); // Pause for 5 seconds
   process.exit();
    // Remove the process.exit() statement to prevent automatic restart
    break;


       
  case 'setnamegc': {
  let value = m.quoted ? m.quoted.text : text;
  if (!value) return m.reply('example: Gss Botwa');
  if (value.length > 25) return m.reply('🚩 Text is too long, maximum 25 characters.');
  await client.groupUpdateSubject(m.chat, value);
  break; // Case break statement
}
case 'setdesc': {
  let value = m.quoted ? m.quoted.text : text;
  if (!value) return m.reply('example: Gss Botwa support group ');
  await client.groupUpdateDescription(m.chat, value);
  break; // Case break statement
}


case 'igdl':
  m.reply('please wait...');
  let res;
  try {
    res = await fetch(`https://inrl-web.onrender.com/api/insta?url=${text}`);
  } catch (error) {
    throw `An error occurred: ${error.message}`;
  }

  let api_response = await res.json();
  if (!api_response || !api_response.result || api_response.result.length === 0) {
    throw `No video found or Invalid response from API.`;
  }

  let cap = `HERE IS THE VIDEO >,<`;

  // Save video to a temporary file with a random name
  let randomFileName = `instagram_${Math.floor(Math.random() * 100000)}.mp4`;
  await client.download(api_response.result[0], randomFileName);

  // Read the saved video file using readFileSync
  let videoBuffer = client.fs.readFileSync(randomFileName);

  // Send the video using sendMessage
  client.sendMessage(m.chat, { video: videoBuffer, mimetype: 'video/mp4' }, 'videoMessage', { quoted: m, caption: cap });

  // Delete the temporary file
  client.fs.unlinkSync(randomFileName);
  break;



case 'cal':
case 'calc':
case 'calcular':
case 'calculadora':
  try {
    let id = m.chat;
    conn.math = conn.math ? conn.math : {};

    if (id in conn.math) {
      clearTimeout(conn.math[id][3]);
      delete conn.math[id];
      return m.reply('...');
    }

    let val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI.]/g, '') // Allow decimal point '.'
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-');

    let format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×');

    let result = (new Function('return ' + val))();

    if (isNaN(result)) throw 'Invalid result';

    m.reply(`*${format}* = _${result}_`);
  } catch (e) {
    // Handle specific error messages
    if (typeof e === 'string') {
      return m.reply(e);
    } else {
      // Handle unexpected errors
      return m.reply('An unexpected error occurred.');
    }
  }
  break; // Case break statement for the calculator command



case 'ss':
case 'ssf':
case 'ssweb':
  if (!args[0]) {
    m.reply(m.chat, '*[🔎] Give a URL*');
  } else {
    try {
      let ss = await (await fetch(`https://image.thum.io/get/fullpage/${args[0]}`)).buffer();
     client.sendFile(m.chat, ss, 'error.png', args[0], m);
    } catch (e) {
      console.error(e);
      client.reply(m.chat, 'An error occurred while capturing the screenshot. Please check the URL.', m);
    }
  }
  break; // Case break statement for taking a screenshot of a web page



case 'kick': {
    // Check if it's a group chat
    // Extract the user to be kicked (from mention or quoted message)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!users) {
        return reply(`*Usage*\n${prefix + command} @tag`);
    }

    // Kick the user from the group
    await client.groupParticipantsUpdate(from, [users], 'remove')
        .then((res) => {
            const response = {
                success: true,
                message: `User ${users} has been kicked from the group.`
            };
            reply(JSON.stringify(response)); // Convert the response to JSON string
        })
        .catch((err) => {
            console.error(err);
            const response = {
                success: false,
                message: "An error occurred while kicking the user."
            };
            reply(JSON.stringify(response)); // Convert the error response to JSON string
        });

    break;
}

case 'add': {
  // Check if it's a group chat

  // Extract the user to be added (from mention, quoted message, or provided text)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

  if (!users) {
    return reply(`*Usage*\n${prefix + command} @tag`);
  }

  // Add the user to the group
  await client.groupParticipantsUpdate(from, [users], 'add')
    .then(() => {
      reply(`User ${users} has been added to the group.`);
    })
    .catch((err) => {
      console.error(err);
      reply('An error occurred while adding the user to the group.');
    });

  break;
}

// Function to download a TikTok video



case 'spotify':
if (!text) return reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return reply(`The link you provided is not a Spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `*Title:* ${name || ''}\n*Artists:* ${(artists || []).join(',')}\n*Album:* ${album_name}\n*Release Date:* ${release_date || ''}`
       const response = await client.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await client.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break


case 'githubstalk': {
  if (!args[0]) return m.reply('Mention a GitHub username to stalk.');

  const username = args[0];

  try {
    // Fetch GitHub user data using Axios
    const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
    const userData = githubResponse.data;

    if (githubResponse.status !== 200) {
      return m.reply(`❌ GitHub user not found.`);
    }

    // Construct the response message
    let responseMessage = `🌟 *GitHub Profile - @${userData.login}*\n\n`;
    responseMessage += `  ◦  *Name*: ${userData.name || 'N/A'}\n`;
    responseMessage += `  ◦  *Username*: @${userData.login}\n`;
    responseMessage += `  ◦  *Bio*: ${userData.bio || 'N/A'}\n`;
    responseMessage += `  ◦  *ID*: ${userData.id}\n`;
    responseMessage += `  ◦  *Node ID*: ${userData.node_id}\n`;
    responseMessage += `  ◦  *Profile URL*: ${userData.avatar_url}\n`;
    responseMessage += `  ◦  *GitHub URL*: ${userData.html_url}\n`;
    responseMessage += `  ◦  *Type*: ${userData.type}\n`;
    responseMessage += `  ◦  *Admin*: ${userData.site_admin ? 'Yes' : 'No'}\n`;
    responseMessage += `  ◦  *Company*: ${userData.company || 'N/A'}\n`;
    responseMessage += `  ◦  *Blog*: ${userData.blog || 'N/A'}\n`;
    responseMessage += `  ◦  *Location*: ${userData.location || 'N/A'}\n`;
    responseMessage += `  ◦  *Email*: ${userData.email || 'N/A'}\n`;
    responseMessage += `  ◦  *Public Repositories*: ${userData.public_repos}\n`;
    responseMessage += `  ◦  *Public Gists*: ${userData.public_gists}\n`;
    responseMessage += `  ◦  *Followers*: ${userData.followers}\n`;
    responseMessage += `  ◦  *Following*: ${userData.following}\n`;
    responseMessage += `  ◦  *Created At*: ${userData.created_at}\n`;
    responseMessage += `  ◦  *Updated At*: ${userData.updated_at}\n`;

   
 const githubReposData = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=stargazers_count&direction=desc`);
    const reposData = await githubReposData.json();

    if (reposData.length > 0) {
      const topRepos = reposData.slice(0, 5); // Display the top 5 starred repositories

      const reposList = topRepos.map(repo => {
        return `  ◦  *Repository*: [${repo.name}](${repo.html_url})
  ◦  *Description*: ${repo.description || 'N/A'}
  ◦  *Stars*: ${repo.stargazers_count}
  ◦  *Forks*: ${repo.forks}`;
      });

      const reposCaption = `📚 *Top Starred Repositories*\n\n${reposList.join('\n\n')}`;
      responseMessage += `\n\n${reposCaption}`;
    } else {
      responseMessage += `\n\nNo public repositories found.`;
    }

    // Add watermark indicating it's generated by GSS Botwa
    responseMessage += `\n\n🤖 *�🌟 𝔾𝕊𝕊 𝔹𝕠𝕥𝕨𝕒 𝔾𝕚𝕥ℍ𝕦𝕓 𝕊𝕥𝕒𝕝𝕜𝕖𝕣  🕵️‍♂*`;

    // Send the message with the updated caption and user's avatar
    await client.sendMessage(m.chat, { image: { url: userData.avatar_url }, responseMessage: responseMessage }, { quoted: m });

    // Add a success reaction message
    const successReactionMessage = {
      react: {
        text: "✔",
        key: m.key
      }
    };
    await client.sendMessage(m.chat, successReactionMessage);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    await client.sendMessage(m.chat, 'An error occurred while fetching GitHub data.', { quoted: m });
  }
  break;
}

case 'tagall':
    // Fetch group metadata
    const groupMetadata = await client.groupMetadata(m.chat);

    // Check if group metadata is available
    if (!groupMetadata) {
        return reply(`Unable to fetch group metadata.`);
    }

    // Extract the list of participants from group metadata
    const participants = groupMetadata.participants || [];

    // Check if there are participants
    if (participants.length === 0) {
        return reply(`No participants found in this group.`);
    }

    // Create the tagall message
    const readmore = String.fromCharCode(8206).repeat(4001);
    const tagallMessage = `${participants.map(v => '◦  @' + v.id.replace(/@.+/, '')).join(' ')}`;
    const finalMessage = `乂  *E V E R Y O N E*\n\n*“Hello everyone, check out this important message!”*\n${readmore}\n${tagallMessage}`;

    // Send the tagall message
    await client.sendMessage(m.chat, finalMessage, m);
    break;


default: {  
            if (isCmd && budy.toLowerCase() != undefined) {  
              if (m.chat.endsWith("broadcast")) return;  
              if (m.isBaileys) return;  
              if (!budy.toLowerCase()) return;  
              if (argsLog || (isCmd && !m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              } else if (argsLog || (isCmd && m.isGroup)) {  
                // client.sendReadReceipt(m.chat, m.sender, [m.key.id])  
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));  
              }  
            }  
          }  
        }  
      }  
    } catch (err) {  
      m.reply(util.format(err));  
    }  
  };  
  
  let file = require.resolve(__filename);  
  fs.watchFile(file, () => {  
    fs.unwatchFile(file);  
    console.log(chalk.redBright(`Update ${__filename}`));  
    delete require.cache[file];  
    require(file);  
  });