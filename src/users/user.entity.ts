import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
