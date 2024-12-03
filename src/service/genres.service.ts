'use server'

export const getSpotifyGenres = async () => {
  
  try {
    const response = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
      headers: {
        'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN}`, 
        'contentType': 'application/json',
      },
    });

    console.log(response)
  
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erro no corpo da resposta:', errorData);
      throw new Error(`Erro ao buscar gêneros: ${errorData.error?.message || 'Desconhecido'}`);
    }
  
    const data = await response.json();
    console.log('data', data)
    return data;
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
  }
  
  }
  