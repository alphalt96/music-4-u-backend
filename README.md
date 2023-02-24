# Backend `music-4-u`
## Features
- All data is now temporary mock and should be implemented in the near future
- Can get the signed url to upload image or audio file to storage server
- Can get the downloadable url of image or audio files from storage server
- Can return the recommended songs and top songs

## Features on developing

## Tech uses
- Typescript
- Expressjs
- Postgres + Typeorm
- Minio (can be intergreated with S3)

## How to run it

Clone the source code from repository and install the dependencies

```sh
cd music-4-u-backend
npm i
```

Create the .env file
```sh
cp .env.exmple .env
```

Run the docker containers
```sh
docker-compose up -d
```

Run migrations
```sh
npm run migration:run
```

Then, run the the app in development mode
```sh
npm run dev
```

## Setup storage (Minio)
After the step run docker is finished, you can go to the link bellow to access the Minio console
```
http://localhost:9001
```

The username and password the be same as the example bellow
```
username=minio_admin
password=minio_admin
```

Then click on `Access keys` tab button on the sidebar and create a new access key, after the access key is created, copy the `access key` and the `secret key` and paste them to the `.env` file

After creating a new access key, we can create buckets for storing media, click on `Buckets` tab button on the sidebar and create two new bucket named `audios` and `images`

Now the storage server on your local is run, you can use the api `getSongUploadUrl` to upload the audio file for the song or `getSongImageUploadUrl` to upload the image for the song
