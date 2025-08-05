import { Injectable } from "@nestjs/common";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class NotificationService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createNotificationDto: CreateNotificationDto) {
    return this.prismaService.notification.create({
      data: {
        read: createNotificationDto.read,
        message: createNotificationDto.message,
        notified_date: createNotificationDto.notified_date,
        user: { connect: { id: createNotificationDto.userId } },
      },
    });
  }

  findAll() {
    return this.prismaService.notification.findMany({
      include: {
        user: true,
      },
    });
  }

  findOne(userId: number) {
    return this.prismaService.notification.findMany({
      where: {
        userId,
      },
      orderBy: {
        notified_date: "desc",
      },
    });
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return this.prismaService.notification.update({
      where: { id },
      data: updateNotificationDto,
    });
  }

  remove(id: number) {
    return this.prismaService.notification.delete({
      where: { id },
    });
  }
}
