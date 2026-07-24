import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {AuthModule} from './auth/auth.module';
import {AuthController} from "./auth/auth.controller";
import {SagaModule} from './saga/saga.module';
import {SagaController} from "./saga/saga.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "AUTH_CLIENT",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://rabbitmq:5672"],
          queue: "AUTH_QUEUE",
        }
      },
      {
        name: "DELIVERY_CLIENT",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://rabbitmq:5672"],
          queue: "DELIVERY_QUEUE",
        }
      },
      {
        name: "USERS_CLIENT",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://rabbitmq:5672"],
          queue: "USERS_QUEUE",
        }
      },
      {
        name: "PRODUCTS_CLIENT",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://rabbitmq:5672"],
          queue: "PRODUCTS_QUEUE",
        }
      },
      {
        name: "ORDERS_CLIENT",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://rabbitmq:5672"],
          queue: "ORDERS_QUEUE",
        }
      },
      {
        name: "REVIEWS_CLIENT",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://rabbitmq:5672"],
          queue: "REVIEWS_QUEUE",
        }
      },
      {
        name: "WAREHOUSES_CLIENT",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://rabbitmq:5672"],
          queue: "WAREHOUSES_QUEUE",
        }
      },
      {
        name: "PROMOTIONS_CLIENT",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://rabbitmq:5672"],
          queue: "PROMOTIONS_QUEUE",
        }
      },
      {
        name: "PAYMENTS_CLIENT",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://rabbitmq:5672"],
          queue: "PAYMENTS_QUEUE",
        }
      }
    ]),
    AuthModule,
    SagaModule
  ],
  controllers: [AppController, AuthController, SagaController],
  providers: [AppService],
})
export class AppModule {
}
