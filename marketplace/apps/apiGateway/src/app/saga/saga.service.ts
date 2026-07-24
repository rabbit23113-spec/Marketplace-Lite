import {BadRequestException, Inject, Injectable, InternalServerErrorException} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {CreateOrderDto} from "./common/dto/createOrder.dto";
import {firstValueFrom} from "rxjs";

@Injectable()
export class SagaService {
  constructor(
    @Inject("DELIVERY_CLIENT") private deliveryClient: ClientProxy,
    @Inject("ORDERS_CLIENT") private ordersClient: ClientProxy,
    @Inject("PAYMENTS_CLIENT") private ordersClient: ClientProxy,
  ) {
  }

  async createOrder(dto: CreateOrderDto) {
    try {
      const order = await firstValueFrom(this.ordersClient.send("orders.create", {dto}));
      const payments = await firstValueFrom(this.ordersClient.send("payments.create", {order}));
      const delivery = await firstValueFrom(this.ordersClient.send("delivery.create", {order}));
      return {order, payments, delivery};
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
