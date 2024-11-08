import { IGenres } from "@/interfaces/genres.interface"

export const getSpotifyGenres = async (): Promise<IGenres> => {
    try {
      const response = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_TOKEN}`
        }
      })
      if (!response.ok) {
        throw new Error('Erro ao buscar gêneros')
      }
      const data = await response.json()
      return { genres: data.genres }
    } catch (error) {
      console.error('Erro no serviço de gêneros do Spotify:', error)
      return { genres: [] }
    }
  }
  