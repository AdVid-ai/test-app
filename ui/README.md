# Pokémon Story Generator – Frontend

This is the Vite + React + Tailwind CSS frontend for the Pokémon Story Generator project. It connects to a Fastify backend to generate funny, themed Pokémon stories using the PokeAPI and OpenAI API.

---

## 🚀 Tech Stack

- **React + Vite** – Fast frontend tooling and development server
- **Tailwind CSS** – Utility-first styling and responsive design
- **Custom Font** – Pokémon-style branding via CDN
- **Fetch API** – Directly calls backend at `http://localhost:3000/story`

---

## 🔧 Setup Instructions

1. **Navigate to the frontend folder**

```bash
cd ui
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Visit the app**

Open your browser to: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Features

-  Input fields for Pokémon name + user-defined theme
-  Generates stories using OpenAI GPT, themed with Pokémon abilities
-  Styled with Tailwind CSS and Pokémon colors/fonts
-  Animated button states and responsive layout

---

## 📁 Structure Overview

```
/ui
├── public/                # Static assets (if any)
├── src/
│   ├── App.jsx            # Main UI logic and layout
│   ├── main.jsx           # ReactDOM mount point
│   ├── index.css          # Tailwind + custom styles
├── index.html             # Vite HTML entry
├── tailwind.config.js     # Custom Pokémon color palette
├── postcss.config.js      # Tailwind/PostCSS config
```

---

## ✨ Custom Styling

- **Font**: Pokémon Solid (via cdnfonts.com)
- **Colors**: Pokémon Red, Blue, Yellow, and Gold (customized in `tailwind.config.js`)
- **Title Styling**: Yellow text with blue stroke outline


---

## 📡 Backend Requirement

This frontend requires the backend API to be running on port `3000`.  
Be sure to start the API server from the root folder:

```bash
node index.js
```

---

## 👤 Author

Created by **John Adams** for the **AdVid Take Home Challenge**