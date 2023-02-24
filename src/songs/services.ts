import { DataSource, IsNull } from 'typeorm';

import { StorageConnection } from '../lib/storage';
import { Song } from '../shared/entities';
import { GetSongByIdResponse } from './types';

export class SongService {
  constructor(
    private readonly pgDatasource: DataSource,
    private readonly storage: StorageConnection
  ) { }

  async getSongById(songId: number): Promise<GetSongByIdResponse> {
    try {
      const song = await await this.pgDatasource
        .getRepository(Song)
        .createQueryBuilder('song')
        .where('song.id = :id', { id: songId })
        .andWhere('song.deleted_at IS NULL')
        .getOne()

      return song;
    } catch (err) {
      console.error(err);

      return 'UNKNOWN_ERROR';
    }
  }

  async getSongSignedUrl(songId: number): Promise<string | null | 'UNKNOWN_ERROR'> {
    try {
      const signedUrl = await this.storage.getSongSignedUrl(songId);

      return signedUrl;
    } catch (err) {
      console.log(err);

      return 'UNKNOWN_ERROR'
    }
  }

  async getSongUploadSignedUrl(songId: number): Promise<string | null | 'UNKNOWN_ERROR'> {
    try {
      const signedUrl = await this.storage.getSongUploadSignedUrl(songId);

      return signedUrl;
    } catch (err) {
      console.log(err);

      return 'UNKNOWN_ERROR'
    }
  }

  async getSongImageSignedUrl(songId: number): Promise<string | null | 'UNKNOWN_ERROR'> {
    try {
      const signedUrl = await this.storage.getSongImageSignedUrl(songId);

      return signedUrl;
    } catch (err) {
      console.log(err);

      return 'UNKNOWN_ERROR'
    }
  }

  async getSongImageUploadSignedUrl(songId: number): Promise<string | null | 'UNKNOWN_ERROR'> {
    try {
      const signedUrl = await this.storage.getSongImageUploadSignedUrl(songId);

      return signedUrl;
    } catch (err) {
      console.log(err);

      return 'UNKNOWN_ERROR'
    }
  }
}
