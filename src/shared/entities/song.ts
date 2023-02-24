import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity({ name: 'songs' })
export class Song {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column({ name: 'released_date' })
  releasedDate: Date;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'deleted_at' })
  deletedAt: Date;

  // relations
}
