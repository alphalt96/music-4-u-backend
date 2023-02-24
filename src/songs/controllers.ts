import { Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import { songService } from '../core';

export async function getRecommendedSongs(req: Request, res: Response) {
  const data = [];
  for (let i = 0; i < 4; i++) {
    data.push({
      id: i + 1,
      title: `Song name ${i + 1}`,
      releasedDate: new Date(),
      artist: 'nobody',
      duration: 280
    })
  }

  return res.status(StatusCodes.OK).json({
    data
  });
}

export async function getTopChartSongs(req: Request, res: Response) {
  const data = [];
  for (let i = 0; i < 4; i++) {
    data.push({
      id: i + 1,
      title: `Song name ${i + 1}`,
      releasedDate: new Date(),
      artist: 'nobody',
      duration: 280
    })
  }

  return res.status(StatusCodes.OK).json({
    data
  });
}

export async function getSongById(req: Request, res: Response) {
  const songId = +req.params.id;

  if (isNaN(songId)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({
        message: ReasonPhrases.BAD_REQUEST
      });
  }

  const song = await songService.getSongById(songId);

  const responseData = {
    data: song
  };

  return res
    .status(StatusCodes.OK)
    .json(responseData);
}

export async function getSongMediaFile(req: Request, res: Response) {
  try {
    const songId = +req.params.id;

    if (isNaN(songId)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          message: ReasonPhrases.BAD_REQUEST
        });
    }

    const signedUrl = await songService.getSongSignedUrl(songId);

    const responseData = {
      url: signedUrl
    }

    return res
      .status(StatusCodes.OK)
      .json(responseData);

  } catch (err) {
    console.error(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR
      });
  }
}

export async function getSongUploadUrl(req: Request, res: Response) {
  try {
    const songId = +req.params.id;

    if (isNaN(songId)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          message: ReasonPhrases.BAD_REQUEST
        });
    }

    const signedUrl = await songService.getSongUploadSignedUrl(songId);

    const responseData = {
      url: signedUrl
    }

    return res
      .status(StatusCodes.OK)
      .json(responseData);

  } catch (err) {
    console.error(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR
      });
  }
}

export async function getSongImage(req: Request, res: Response) {
  try {
    const songId = +req.params.id;

    if (isNaN(songId)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          message: ReasonPhrases.BAD_REQUEST
        });
    }

    const signedUrl = await songService.getSongImageSignedUrl(songId);

    const responseData = {
      url: signedUrl
    }

    return res
      .status(StatusCodes.OK)
      .json(responseData);

  } catch (err) {
    console.error(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR
      });
  }
}

export async function getSongImageUploadUrl(req: Request, res: Response) {
  try {
    const songId = +req.params.id;

    if (isNaN(songId)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({
          message: ReasonPhrases.BAD_REQUEST
        });
    }

    const signedUrl = await songService.getSongImageUploadSignedUrl(songId);

    const responseData = {
      url: signedUrl
    }

    return res
      .status(StatusCodes.OK)
      .json(responseData);

  } catch (err) {
    console.error(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR
      });
  }
}
