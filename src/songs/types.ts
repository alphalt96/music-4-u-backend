import { Song } from '../shared/entities';

export type GetSongByIdResponse = Song | 'NOT_FOUND' | 'UNKNOWN_ERROR';
