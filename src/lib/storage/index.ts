import { Client } from 'minio';

export class StorageConnection {
  private client: Client;

  private host = process.env.STORAGE_HOST;
  private port = +process.env.STORAGE_PORT;
  private accessKey = process.env.STORAGE_ACCESS_KEY;
  private secretKey = process.env.STORAGE_SECRET_KEY;

  private audioBucketName = 'audios';
  private imageBucketName = 'images'
  private signedUrlExpireTime = 120 // Unit as a seconds

  startConnection(): void {
    this.client = new Client({
      endPoint: this.host,
      port: this.port,
      accessKey: this.accessKey,
      secretKey: this.secretKey,
      useSSL: process.env.NODE_ENV === 'local' ? false : true
    });
  }

  async getSongSignedUrl(id: number): Promise<string | null> {
    try {
      const signedUrl = await this.client.presignedGetObject(
        this.audioBucketName,
        `songs/${id.toString()}`,
        this.signedUrlExpireTime
      );
  
      return signedUrl;
    } catch (err) {
      console.error(err);
      
      return null;
    }
  }

  async getSongUploadSignedUrl(id: number): Promise<string | null> {
    try {
      const signedUrl = await this.client.presignedPutObject(
        this.audioBucketName,
        `songs/${id.toString()}`,
        this.signedUrlExpireTime
      );
  
      return signedUrl;
    } catch (err) {
      console.error(err);
      
      return null;
    }
  }

  async getSongImageSignedUrl(id: number): Promise<string | null> {
    try {
      const signedUrl = await this.client.presignedGetObject(
        this.imageBucketName,
        `songs/${id.toString()}`,
        this.signedUrlExpireTime
      );
  
      return signedUrl;
    } catch (err) {
      console.error(err);
      
      return null;
    }
  }

  async getSongImageUploadSignedUrl(id: number): Promise<string | null> {
    try {
      const signedUrl = await this.client.presignedPutObject(
        this.imageBucketName,
        `songs/${id.toString()}`,
        this.signedUrlExpireTime
      );
  
      return signedUrl;
    } catch (err) {
      console.error(err);
      
      return null;
    }
  }
}
