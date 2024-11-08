import { NextApiRequest, NextApiResponse } from 'next';
import { getSpotifyGenres } from '../service/genres.service';

export default async function buscaGeneros(req: NextApiRequest, res: NextApiResponse) {
    try {
        const genres = await getSpotifyGenres();
        res.status(200).json(genres);
    } catch (error) {
        console.error('Erro ao buscar gêneros:', error);
        res.status(500).json({ error: 'Falha ao buscar gêneros' });
    }
}