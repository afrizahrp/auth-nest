import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/dto/user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const user = await this.prisma.sys_User.findUnique({
      where: {
        name: dto.name,
      },
    });

    if (user) {
      throw new ConflictException('Email already exists');
    }

    const newUser = await this.prisma.sys_User.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: await hash(dto.password, 10),
        role_id: dto.role_id,
      },
    });

    const { password, ...result } = newUser;
    return result;
  }

  async findByName(name: string) {
    return this.prisma.sys_User.findUnique({
      where: {
        name,
      },
    });
  }
  async findById(id: number) {
    return this.prisma.sys_User.findUnique({
      where: {
        id,
      },
    });
  }

  async updateHashedRefreshToken(userId: number, hashedRT: string | null) {
    return await this.prisma.sys_User.update({
      where: {
        id: userId,
      },
      data: {
        hashedRefreshToken: hashedRT,
      },
    });
  }
}
