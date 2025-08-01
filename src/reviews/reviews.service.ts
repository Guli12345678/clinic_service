import { Injectable } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ReviewsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createReviewDto: CreateReviewDto) {
    return this.prismaService.review.create({
      data: {
        rating: createReviewDto.rating,
        comment: createReviewDto.comment,
        doctor: { connect: { id: createReviewDto.doctorId } },
        user: { connect: { id: createReviewDto.userId } },
      },
    });
  }

  findAll() {
    return this.prismaService.review.findMany({
      include: {
        doctor: true,
        user: {
          select: {
            full_name: true,
            email: true,
            role: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.review.findUnique({ where: { id } });
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return this.prismaService.review.update({
      data: updateReviewDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prismaService.review.delete({ where: { id } });
  }
}
