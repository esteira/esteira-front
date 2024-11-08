'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getSpotifyGenres } from '@/service/genres.service'

export default function Home() {
  const [height, setHeight] = useState('')
  const [speed, setSpeed] = useState('')
  const [genres, setGenres] = useState<string[]>([])
  const [selectedGenre, setSelectedGenre] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchGenres()
  }, [])

  const fetchGenres = async () => {
    setIsLoading(true)
    try {
      const response = await getSpotifyGenres()
      const data = await response
      setGenres(data.genres)
    } catch (error) {
      console.error('Erro ao buscar gêneros:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-lg p-6 sm:p-10 rounded-2xl shadow-2xl text-center w-full max-w-md relative overflow-hidden"
      >
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 relative z-10">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src="/Spotify_logo.png"
              alt="Spotify Logo"
              width={60}
              height={60}
              className="mb-4 sm:mb-6"
            />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Hayai Home
          </h1>
          <input
            type="number"
            placeholder="Altura"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            placeholder="Velocidade"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="w-full bg-white/20 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Selecione um gênero musical</option>
            {isLoading ? (
              <option value="" disabled>Carregando gêneros...</option>
            ) : (
              genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))
            )}
          </select>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-green-600 hover:bg-green-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold text-base sm:text-lg transition-all duration-300`}
            onClick={() => console.log('Gênero selecionado:', selectedGenre)}
          >
            Confirmar
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}