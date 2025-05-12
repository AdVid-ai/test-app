// services/pokeService.js
import fetch from 'node-fetch'

// Simple in-memory cache to avoid duplicate API requests for the same Pokémon
const pokemonCache = new Map()

/**
 * Fetches Pokémon data from the PokeAPI.
 * Caches results to reduce redundant network calls.
 *
 * @param {string} name - Pokémon name (case-insensitive)
 * @returns {object} Pokémon details (name, types, abilities, image)
 */

export async function getPokemonData(name) {
  const key = name.toLowerCase()
  if (pokemonCache.has(key)) return pokemonCache.get(key)

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`)
  if (!res.ok) throw new Error('Pokémon not found')

  const data = await res.json()
  // Extract relevant fields from API response
  const result = {
    name: data.name,
    types: data.types.map(t => t.type.name),
    abilities: data.abilities.map(a => a.ability.name),
    image: data.sprites.other['official-artwork'].front_default
  }

  pokemonCache.set(key, result)
  return result
}
