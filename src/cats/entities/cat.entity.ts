import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { User } from '../../users/user.entity';

@Entity()
export class Cat {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column((type) => User)
  owner: User;
}
