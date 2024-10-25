import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateStoryDto {
  @IsNumber()
  @IsNotEmpty()
  validTime: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  hashtags: string[];
}
