import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Vehiculo } from './vehiculo.entity';
import { VehiculosService } from './vehiculos.service';

@Crud({
    model: {
        type: Vehiculo
    }
})
@Controller('vehiculos')
export class VehiculosController implements CrudController<Vehiculo> {

    constructor(public service: VehiculosService) { }

}
