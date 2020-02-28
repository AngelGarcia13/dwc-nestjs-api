import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateProfileDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    initials: string;
    @ApiProperty()
    image: string;
    @ApiProperty()
    summary: string;
    @ApiProperty()
    skills: string;
    @ApiPropertyOptional()
    linkedin: string;
    @ApiPropertyOptional()
    github: string;
    @ApiPropertyOptional()
    twitter: string;
    @ApiPropertyOptional()
    webpage: string;
    @ApiPropertyOptional()
    stackoverflow: string;
    @ApiPropertyOptional()
    telegram: string;
    @ApiPropertyOptional()
    youtube: string;
}