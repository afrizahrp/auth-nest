import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  userName: string;
  @IsString()
  password: string;
}
