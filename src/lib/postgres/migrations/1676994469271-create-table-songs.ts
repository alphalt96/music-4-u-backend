import { MigrationInterface, QueryRunner } from "typeorm"

export class createTableSongs1676989444930 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS songs (
        id serial PRIMARY KEY,
        title VARCHAR (50) UNIQUE NOT NULL,
        artist VARCHAR (100),
        released_date TIMESTAMP,
        duration INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP
      )`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
