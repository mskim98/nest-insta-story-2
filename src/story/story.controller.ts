import { Controller, Get, Post, Body } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { GetStroyDto } from './dto/get-stroy.dto';

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  create(@Body() createStoryDto: CreateStoryDto) {
    return this.storyService.create(createStoryDto);
  }

  @Get()
  findAll(@Body() getStroyDto: GetStroyDto) {
    return this.storyService.findAll(getStroyDto);
  }
}
