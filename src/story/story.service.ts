import { Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetStroyDto } from './dto/get-stroy.dto';

@Injectable()
export class StoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStoryDto: CreateStoryDto) {
    const createdStory = await this.prisma.story.create({
      data: {
        ...createStoryDto,
      },
    });

    return createdStory;
  }

  async findAll(getStroyDto: GetStroyDto) {
    const { page, limit } = getStroyDto;
    const getStory = await this.prisma.story.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    return getStory;
  }
}
