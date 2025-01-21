//                    :¨·.·¨: - 🐆🥽💕
//                     `·.. ⋆-  𝐇𝐞𝐲𝐲 𝐢𝐭'𝐬 me Robin ⚡️!
//                    ╭ → ❝ Multi Device Whatsapp Bot ❞ 
//                    ┊🛍💞𝓨𝗼𝘂'𝗿𝗲 𝗽𝗲𝗿𝗳𝗲𝗰𝘁! 
//                    ✰ Give me a star ! 
//                    ✩ + _𝘀𝗺𝗶𝗹𝗲 all time
//                    ╰ → 🥽🐆🏄‍♀️⚡️🤭




//                    ˚∧＿∧  　+        —̳͟͞͞💗
//                    (  •‿• )つ  —̳͟͞͞ 💗         —̳͟͞͞💗 +
//                    (つ　 <                —̳͟͞͞💗
//                    ｜　 _つ      +  —̳͟͞͞💗         —̳͟͞͞💗 ˚
//                    `し´


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRABATH-MD~w2lWiLrL#F958VUBlKIVv-9Djf_xulePuJom52Re4rMMD2omEY6g",
MONGODB: process.env.MONGODB || "mongodb://mongo:ivScDiAEjcmzndSaksqYPMtULZXQdfej@autorack.proxy.rlwy.net:54307",
OWNER_NUM: process.env.OWNER_NUM || "94720552487", // Remove this number and add your number with country code
};
  
