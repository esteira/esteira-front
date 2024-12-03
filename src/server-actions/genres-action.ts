'use server'

import { getSpotifyGenres } from '../service/genres.service';

export default async function buscaGeneros() {
    try {
        const genres = await getSpotifyGenres();
        return genres;
    } catch (error) {
        console.error('Erro ao buscar gêneros:', error);
    }
}