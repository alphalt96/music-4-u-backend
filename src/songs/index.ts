import { Router } from 'express';

import { IBaseModule } from '../shared/interfaces/baseModule';
import { getRecommendedSongs, getSongById, getSongImage, getSongImageUploadUrl, getSongMediaFile, getSongUploadUrl, getTopChartSongs } from './controllers';

export class SongModule implements IBaseModule {
  router: Router;

  constructor() {
    this.router = Router();
    this.assignRoutes();
  }

  getModule() {
    return this.router;
  }

  assignRoutes() {
    this.router.get('/getSongById/:id', getSongById);
    this.router.get('/getRecommendedSongs', getRecommendedSongs);
    this.router.get('/getTopChartSongs', getTopChartSongs);
    this.router.get('/getSongMediaFile/:id', getSongMediaFile);
    this.router.post('/getSongUploadUrl/:id', getSongUploadUrl);
    this.router.get('/getSongImage/:id', getSongImage);
    this.router.post('/getSongImageUploadUrl/:id', getSongImageUploadUrl);
  }
}
