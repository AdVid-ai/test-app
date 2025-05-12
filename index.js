// index.js
// Core server + plugins
import Fastify from 'fastify'
import dotenv from 'dotenv'
import cors from '@fastify/cors'

// Route modules
import { registerRootRoute } from './routes/root.js'
import { registerPokemonRoutes } from './routes/pokemon.js'
import { registerStoryRoutes } from './routes/story.js'

// Middleware
import rateLimit from './middleware/rateLimit.js'
import logger from './middleware/logger.js'

// Load .env environment variables (e.g. OPENAI_API_KEY)
dotenv.config()

// Create a Fastify instance with built-in logger enabled
const fastify = Fastify({ logger: true })

// Register middleware
await fastify.register(rateLimit)
await fastify.register(logger)

// Allow CORS for frontend (Vite dev server will hit this)
await fastify.register(cors, {
  origin: true
})

// Register application routes
registerRootRoute(fastify)
registerPokemonRoutes(fastify)
registerStoryRoutes(fastify)

// Start the server on port 3000
fastify.listen({ port: 3000 }, err => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
