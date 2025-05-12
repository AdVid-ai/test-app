""// ui/src/App.jsx
import { useState } from 'react'

export default function App() {
  // State for user inputs and story output
  const [name, setName] = useState('snorlax')        // Default Pokémon name
  const [theme, setTheme] = useState('ham')          // Default theme
  const [story, setStory] = useState('')             // Holds generated story text
  const [loading, setLoading] = useState(false)      // Tracks fetch in progress

  /**
   * Submits name + theme to backend /story endpoint.
   * Displays returned story or error.
   */

  const handleSubmit = async () => {
    setLoading(true)
    setStory('')

    try {
      const response = await fetch('http://localhost:3000/story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, theme })
      })
      // If non-2xx, throw to enter catch block
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`)
      }

      const data = await response.json()
      setStory(data.story || data.error || 'No story returned.')
    } catch (err) {
      setStory(`Request failed: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    // Full-height gradient background
    <div className="min-h-screen bg-gradient-to-b from-pokemon-red to-pokemon-yellow text-white py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 text-black">
        {/* Title */}
        <h1 className="text-4xl text-center pokemon-title mb-6">
          Pokémon Story Generator
        </h1>

        {/* Input fields */}
        <div className="space-y-4">
          <input
            className="w-full p-3 border border-pokemon-gold rounded focus:outline-none"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter Pokémon name"
          />

          <input
            className="w-full p-3 border border-pokemon-gold rounded focus:outline-none"
            value={theme}
            onChange={e => setTheme(e.target.value)}
            placeholder="Enter a theme (e.g. fantasy, space)"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="p-2 bg-pokemon-red text-white font-semibold rounded hover:bg-pokemon-gold transition-colors duration-200"
          >
            {loading ? 'Generating Story...' : 'Generate Story'}
          </button>
        </div>

        {/* Story output */}
        {story && (
          <div className="mt-6 p-4 bg-gray-100 text-black rounded whitespace-pre-wrap">
            {story}
          </div>
        )}
      </div>
    </div>
  )
}
