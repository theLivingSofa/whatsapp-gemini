
<h1 align="center">🤖 WhatsApp + Gemini Auto-Reply Bot</h1>
<p align="center">
  <strong>A funny, Hinglish WhatsApp auto-reply bot powered by Google's Gemini AI</strong><br>
  Built using <code>whatsapp-web.js</code> + <code>@google/genai</code>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Gemini_API-Required-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/WhatsApp-Web-orange?style=for-the-badge">
</p>

---

## ✨ Features

✔ Auto-reply to WhatsApp messages  
✔ Hinglish fun personality 🤩  
✔ Google Gemini powered 🧠  
✔ Typing indicator simulation ⌨️  
✔ Configurable whitelist for contacts  
✔ Ignores very short spam messages 🙄  
✔ Runs directly in Chrome automation  

---

## 📌 Requirements

- Node.js 18+
- Chrome installed
- A valid Gemini API key (free plan works)

---

## 🚀 Setup Instructions (YouTube style guide)

### ▶ Step 1 — Clone the Repo

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/wp-gemini-bot.git
cd wp-gemini-bot
```

### ▶ Step 2 — Install Dependencies

```bash
npm install
```

### ▶ Step 3 — Create Your Config

Copy this file:

```bash
cp config.example.json config.json
```

Open `config.json` and fill:

```json
{
  "apiKey": "YOUR_GEMINI_API_KEY",
  "allowedContacts": [
    "919123456789"
  ],
  "ignoreShort": true
}
```

> ⚠ Phone number should be saved without + symbol  
> Example: 91 + 9123456789 → `919123456789`

---

### ▶ Step 4 — Run the Bot

```bash
node src/bot.js
```

Scan the QR code in your console.

> Keep WhatsApp Web window always open 👀

---

## 🧠 How it Works

1. Bot listens for new incoming messages  
2. If sender’s number is in whitelist → process  
3. Gemini generates Hinglish casual reply  
4. WhatsApp-Web.js sends back automatically  

---

## 🧩 Folder Structure

```
wp-gemini-bot/
│
├─ src/
│  ├─ bot.js
│
├─ config.json          ← your API key (🚫 do NOT commit)
├─ config.example.json  ← template (✔ commit)
├─ .gitignore
├─ package.json
├─ README.md
```

---

## ⚠️ IMPORTANT SECURITY NOTE

Never upload:

- `config.json` (API key)
- `.wwebjs_auth/` (your WhatsApp login)
- `.wwebjs_cache/`

These are protected using `.gitignore` in this repo.

---

## 💪 Customization

| Feature | Status |
|--------|--------|
Multiple personalities | Coming Soon 😍 |
Slash Commands `/stop` `/start` | Coming Soon 🛠 |
Group support | Optional |
Logging chat history | Available on request |

Want more? Just open an issue ☺️

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, open an issue first.

---

### ⭐ If you like this project, don't forget to star the repo!
