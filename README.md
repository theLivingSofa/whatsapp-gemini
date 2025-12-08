
<h1 align="center">🤖 WhatsApp + Gemini Auto-Reply Bot</h1>
<p align="center">
  <strong>Turn your WhatsApp into a Hinglish AI buddy (Gemini-powered)</strong><br>
  Auto-replies, typing simulation, whitelist, emojis — full swag 😎
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18%2B-22c55e?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Gemini_API-Required-38bdf8?style=for-the-badge">
  <img src="https://img.shields.io/badge/WhatsApp-Web-25D366?style=for-the-badge&logo=whatsapp&logoColor=white">
</p>

---

## ✨ Features

- 💬 Auto-replies like a funny, extroverted Hinglish dost
- 🧠 Uses Google's Gemini (official @google/genai)
- ⌨️ Shows typing before responding
- 🧾 Whitelist: replies only to selected numbers
- 🙄 Ignores short spam (ok, hmm, 👍 etc)
- 🖥 Runs on your laptop using WhatsApp Web automation

---

## 🚀 Quick Setup Guide

> YouTube setup style — super simple 👇

### 1️⃣ Clone the repo

```bash
git clone https://github.com/thelivingsofa/whatsapp-gemini.git
cd whatsapp-gemini
```

### 2️⃣ Install dependencies

```bash
npm install
```

> ⚠ Phone numbers must be saved **without +**  
> Example → `+91 9123456789` → `919123456789`

### 3️⃣ Add your config

```bash
cd src
cp config.example.json config.json
```

Fill it like:

```json
{
  "apiKey": "YOUR_GEMINI_API_KEY",
  "allowedContacts": ["919123456789"],
  "ignoreShort": true
}
```

### 4️⃣ Run the bot

```bash
node src/bot.js
```

Scan the QR on your phone — that's it!

> Keep the browser running or bot will stop ⚠

---

## 🧠 How it Works

```
New WhatsApp Message → Check whitelist → Send to Gemini →
Gemini generates Hinglish reply → Bot replies back with typing status 😎
```

---

## 📁 Project Structure

```text
whatsapp-gemini/
│
├─ src/
│  ├─ bot.js                # main bot
│  ├─ config.json           # your API key + settings (🚫 do NOT share)
│  ├─ config.example.json   # safe template (✔ commit)
│
├─ .gitignore               # protects your WhatsApp auth + keys
├─ package.json
├─ README.md
```

---

## 🔐 Private & Secure

- No server
- No chat logs stored
- WhatsApp auth stays local using LocalAuth
- Fully open source

Never commit:

- `src/config.json`
- `.wwebjs_auth/`
- `.wwebjs_cache/`

---

## 💡 Future Ideas

| Feature | Status |
|--------|--------|
Multiple personalities | Soon 🚀 |
Slash commands `/stop` `/start` | In progress |
Group support | Optional limited |
Conversation log UI | Possible later |

---

## 🤝 Contribute

PRs and ideas are always welcome!  
Create issues to suggest upgrades 🙂  

---

### ⭐ Like this project? Support by starring the repo!
