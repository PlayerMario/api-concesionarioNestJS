import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Vehiculo } from './vehiculo.entity';

@Injectable()
export class VehiculosService extends TypeOrmCrudService<Vehiculo> {

    constructor(@InjectRepository(Vehiculo) vehiculoRepository) {
        super(vehiculoRepository);
    }

}
