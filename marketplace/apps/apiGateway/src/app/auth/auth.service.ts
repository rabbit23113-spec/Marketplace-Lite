import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {SignInDto} from "./common/dto/signIn.dto";
import {AuthResponseDto} from "./common/dto/authResponse.dto";
import {firstValueFrom} from "rxjs";
import {SignUpDto} from "./common/dto/signUp.dto";

@Injectable()
export class AuthService {
  constructor(@Inject("AUTH_CLIENT") private authClient: ClientProxy) {
  }

  async signIn(dto: SignInDto): Promise<AuthResponseDto> {
    return await firstValueFrom(this.authClient.send("auth.signIn", {dto}));
  }

  async signUp(dto: SignUpDto): Promise<AuthResponseDto> {
    return await firstValueFrom(this.authClient.send("auth.signUp", {dto}));
  }
}
