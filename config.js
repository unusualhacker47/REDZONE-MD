const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "QADEER-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0F2U3YwYmtTZWI1ODZ1TkdIbGJEQXhqYllsVGtxZnZRSHp0dnBWNlFGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVdQQlVxYW54ZTlCcjBoN2srSFlTM2NnaStIYzh5VEdpOUJndU5Ba3ZrOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUDIxT1BqU0IzeVJ3dFQ5YmRLT1RlKzZ6SFlqckxvQ2tCbXRrekI2RlhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpbVRWQlkrZ2hqcDM1RGZ6cTNyenRyRDRkNmcrZTUwU2dZbzVIZ2l2OFhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHRWhCZnN2RUdmRm9LbGI5MFBVQkNkUVhJempVdWVISTlXek9GVkdQMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNEU1BESVhWY1lxQS9scWZ6MGNuemFmMlJwcm5PSFFsN1QyWGVnangySEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05FUVFKcnpmdGliejVjV0pveWI5QjdXblpCVkZjMlRCaFRvbjhQYWNVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnc2VjJqUWhLQUF6MUhlejBRUHJxanVtQlorSk5mWFVOVTRERjJFMENXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU3U0tZRWJvZzZVbHMyekpRTmx0Q2sybERqK013Q2ZqVEEvbTQ0UHJtR2ZtMUl3a3JmVFlVa2lhc3hmM3NFREtXMHM1WUdaejdDWmh3MU5kRStud0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiIzSmp2cDIxczh4bG5tMzZ5dFpKd3BVMUE1SVNKMGNoQVNyeTRNMm5NYlFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwMDAwNTI1M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzQ2OEM1Mjg2OUYwRDJENzYzN0E5OEFBQkYxODIwRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NDA1OTgyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMDAwMDUyNTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNCODM0NDU4Rjk1M0RFNjE0NUQ0NTJCMUY5QkJFQ0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODQwNTk4Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTkhSNzNBVlYiLCJtZSI6eyJpZCI6IjkyMzMwMDAwNTI1Mzo1MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIyNTQwODk0MzQwMzE5NTo1MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05DbTd1RUNFTmJLdk1ZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxoaEovbzh2R0JVT3BocWdCUjA1Qnp1bnZFSG0vaHVvQmgycm9TQi95eHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndoSzl1eE1WWU9Pb0NGaHlCTnVKMlczeVlDUDNxa0VsNkFkajVwU1k1Nlh1SCt6L1g3VHRidUc3ZC9GaklQL2F4N0hYWEd3RzRiRkJLT1JoNFFQbEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2Q1hFQ0tLaXpWNXJabXFPQ01xK00yWWcrMGZVU3JvWUtLTVhMS3NzU3k5cGVneHc1eGlNeDVndDc1NUZaNk8yMnlmV1J3Mkl4ZGtRK1RPZGFHVXZBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMwMDAwNTI1Mzo1MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTNFlTZjZQTHhnVkRxWWFvQVVkT1FjN3A3eEI1djRicUFZZHE2RWdmOHNiIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg0MDU5NzgsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOUlUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY REDZONE-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/l8psgf.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "REDZONE-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "REDZONE-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923235906096",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "QADEERxNOMI",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙽𝙾𝙼𝙸𝚡𝚀𝙰𝙳𝙴𝙴𝚁*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/l8psgf.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*REDZONE-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923235906096",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
