import { Entity, TableInheritance, PrimaryGeneratedColumn, Column, ChildEntity } from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;
}

@ChildEntity()
export class Folder extends Tag {

}

@ChildEntity()
export class List extends Tag {

}