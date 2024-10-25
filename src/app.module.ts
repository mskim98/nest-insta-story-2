import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { StoryModule } from './story/story.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), StoryModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
