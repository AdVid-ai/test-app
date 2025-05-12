// routes/root.js

/**
 * Registers the root (/) route.
 * Acts as a lightweight health check or API overview endpoint.
 */

export function registerRootRoute(fastify) {
  fastify.get('/', async (req, reply) => {
    reply.send({
      message: 'Welcome to the Pokémon Story Generator API',
      routes: {
        pokemon: 'GET /pokemon/:name',        // Returns data from PokeAPI
        story: 'POST /story { name, theme }'  // Generates a story using OpenAI
      }
    })
  })
}
