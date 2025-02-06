import { IsNumber, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number; // Perbaiki tipe data dari string ke number

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string; // Tambahkan field tambahan jika diperlukan

  @IsString()
  roleId: string; // Tambahkan field tambahan jika diperlukan
}
