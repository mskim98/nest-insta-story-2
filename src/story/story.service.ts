import { Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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

  findAll() {
    return `This action returns all story`;
  }
}
