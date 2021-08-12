import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity('student')
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
