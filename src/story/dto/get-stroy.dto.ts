import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetStroyDto {
  @IsNumber()
  @IsNotEmpty()
  page: number;

  @IsNumber()
  @IsNotEmpty()
  limit: number;
}
