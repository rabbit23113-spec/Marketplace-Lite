import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {ApiBody, ApiResponse} from "@nestjs/swagger";
import {SignInDto} from "./common/dto/signIn.dto";
import {AuthResponseDto} from "./common/dto/authResponse.dto";
import {SignUpDto} from "./common/dto/signUp.dto";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {
  }

  @ApiResponse({status: 201, type: AuthResponseDto})
  @ApiBody({type: SignInDto})
  @Post("signin")
  async signIn(@Body() body: SignInDto): Promise<AuthResponseDto> {
    return await this.authService.signIn(body);
  }

  @ApiResponse({status: 201, type: AuthResponseDto})
  @ApiBody({type: SignInDto})
  @Post("signup")
  async signUp(@Body() body: SignUpDto): Promise<AuthResponseDto> {
    return await this.authService.signUp(body);
  }
}
