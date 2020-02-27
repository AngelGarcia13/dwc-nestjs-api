import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import {CreateCatDto} from './models/dto/create-cat.dto';
import { UpdateCatDto } from './models/dto/update-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './models/cat';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.catsService.find(id);
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return this.catsService.create(createCatDto);;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.catsService.remove(id);
    }
}
