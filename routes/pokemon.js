// routes/pokemon.js
import { getPokemonData } from '../services/pokeService.js'

/**
 * Registers the /pokemon/:name route.
 * Fetches data from the PokeAPI using the given Pokémon name.
 * Example: GET /pokemon/pikachu
 */

export function registerPokemonRoutes(fastify) {
  fastify.get('/pokemon/:name', {
    schema: {
      params: {
        type: 'object',
        properties: {
          name: { type: 'string' }
        },
        required: ['name']   // Require 'name' in the route param
      }
    }
  }, async (req, reply) => {
    try {
      const data = await getPokemonData(req.params.name)
      reply.send(data)
    } catch (err) {
      reply.code(404).send({ error: 'Pokémon not found' })
    }
  })
}