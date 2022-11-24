import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    marca: string;

    @ApiProperty()
    @Column()
    modelo: string;

    @ApiProperty()
    @Column({ default: 0 })
    potenciaCV: number;
}