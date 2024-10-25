import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {PrismaService} from "./prisma/prisma.service";
import { StoryPostModule } from './story-post/story-post.module';
import { StoryGetModule } from './story-get/story-get.module';
import { StoryModule } from './story/story.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    StoryPostModule,
    StoryGetModule,
    StoryModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
