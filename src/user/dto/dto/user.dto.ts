import { IsNumber, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string; // Tambahkan field tambahan jika diperlukan

  @IsString()
  role_id: string;
}
