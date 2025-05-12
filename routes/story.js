// routes/story.js
import { generatePokemonStory } from '../services/openaiService.js'
import { getPokemonData } from '../services/pokeService.js'

/**
 * Registers the POST /story route.
 * Accepts a Pokémon name and a theme, then generates a story via OpenAI API.
 */

export function registerStoryRoutes(fastify) {
  fastify.post('/story', {
    schema: {
      body: {
        type: 'object',
        properties: {
          name: { type: 'string' },  // e.g., "snorlax"
          theme: { type: 'string' }  // e.g., "ham"
        },
        required: ['name', 'theme']
      }
    }
  }, async (req, reply) => {
    const { name, theme } = req.body

    try {
      // Step 1: Fetch Pokémon data (abilities, image, etc.)
      const pokemon = await getPokemonData(name)
      // Step 2: Use OpenAI to generate story from Pokémon + theme
      const story = await generatePokemonStory(pokemon, theme)
      reply.send({ story })
    } catch (err) {
      reply.code(500).send({ error: 'Story generation failed', details: err.message })
    }
  })
}
