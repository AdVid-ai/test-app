# Pokémon Story Generator API

A **Node.js + Fastify** backend that combines the [PokeAPI](https://pokeapi.co/docs/v2) and OpenAI API to generate funny, themed Pokémon stories.

---

## 📦 Tech Stack

- **Fastify** – Fast, low overhead web framework  
- **OpenAI API** – Generates stories using Pokémon data and user themes  
- **PokeAPI** – Retrieves Pokémon details (name, abilities, etc.)  
  ⚠️ *Note: Image support not included in this version*  
- **Custom Middleware** – IP rate limiting (100 requests per 15 minutes), request logging  
- **dotenv** – Loads environment variables from `.env`

### 📁 Project Structure

```
/routes         → API route definitions (/story, /pokemon)
/services       → Logic for PokeAPI + OpenAI integration
/middleware     → Rate limiting & logging middleware
index.js        → Fastify server entry point
.env            → Stores OPENAI_API_KEY
```

---

## 🔧 Backend Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourname/test-app.git
cd test-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file with your OpenAI API key**

```bash
echo "OPENAI_API_KEY=your-openai-api-key" > .env
```

4. **Start the server**

```bash
node index.js
```

5. **Test the API with cURL**

```bash
curl -X POST http://localhost:3000/story \
  -H "Content-Type: application/json" \
  -d '{"name": "pikachu", "theme": "space adventure"}'
```

---

## 🌐 Optional: Frontend Setup (Vite + React)

The companion frontend is located in the `/ui` directory.

```bash
cd ui
npm install
npm run dev
```

---

## 📚 API Reference

- [PokeAPI Docs](https://pokeapi.co/docs/v2)

---

Created by **John Adams**