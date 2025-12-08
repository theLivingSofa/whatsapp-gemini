// ===============================
// WhatsApp + Gemini Bot 
// ===============================

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { GoogleGenAI } = require('@google/genai');
const config = require('./config.json');

// Gemini Setup
const ai = new GoogleGenAI({ apiKey: config.apiKey });

async function generateReply(userText) {
  const prompt = `
Reply like an extroverted funny Hinglish friend 😎 with light emojis.
Short, casual, fun replies only.

Message: "${userText}"
  `.trim();

  console.log("🧠 Sending to Gemini:", userText);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ]
  });

  let reply = response.text ?? "";
  reply = reply.trim();
  if (!reply) reply = "Haha 😂 bolo na, kya chal raha?";

  console.log("🧠 Gemini:", reply);
  return reply;
}

// WhatsApp Client
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', qr => qrcode.generate(qr, { small: true }));
client.on('ready', () => console.log("🤖 Bot Ready — Auto replying!"));

// MAIN LOGIC — only incoming messages
client.on('message', async (msg) => {
  try {
    if (msg.fromMe) return; // ignore own messages

    const from = msg.from;
    const text = msg.body.trim();
    const contact = await msg.getContact();
    const number = contact.number; // ADDED — whitelist by number
    const name = contact.pushname || contact.name || number;

    console.log(`📩 ${name} (${from}): "${text}"`);

    // UPDATED WHITELIST CHECK — uses phone number OR JID
    if (
      !config.allowedContacts.includes(number) &&
      !config.allowedContacts.includes(from)
    ) {
      console.log("⛔ Not in whitelist:", number, name);
      return;
    }

    // Ignore short
    if (config.ignoreShort && text.length <= 2) {
      console.log("⏭️ Ignored short:", text);
      return;
    }

    // Force send to REAL chats only (UNCHANGED)
    let target = from;
    if (!target.endsWith("@c.us")) {
      console.log("⚠️ Looks like status/broadcast — fixing...");
      const userId = contact.id._serialized;
      if (userId.endsWith("@c.us")) {
        target = userId;
      } else {
        console.log("❌ Could not correct JID. Skipping.");
        return;
      }
    }

    const chat = await msg.getChat();
    await chat.sendStateTyping();

    const reply = await generateReply(text);

    setTimeout(async () => {
      console.log("📤 Sending to:", target);
      const sent = await client.sendMessage(target, reply);
      console.log("✅ Sent:", sent.id._serialized);
    }, 1500 + Math.random() * 1500);

  } catch (err) {
    console.error("❌ Error:", err);
  }
});

client.initialize();
