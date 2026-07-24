import {Body, Controller} from '@nestjs/common';
import {SagaService} from './saga.service';
import {CreateOrderDto} from "./common/dto/createOrder.dto";
import {ApiBody, ApiResponse} from "@nestjs/swagger";

@Controller('saga')
export class SagaController {
  constructor(private readonly sagaService: SagaService) {
  }

  @ApiBody({type: CreateOrderDto})
  @ApiResponse({status: 201})
  async createOrder(@Body() body: CreateOrderDto) {
    return await this.sagaService.createOrder(body);
  }
}
