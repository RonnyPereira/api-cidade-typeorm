import { Controller } from '@nestjs/common';
import { CidadesService } from './cidades.service';
import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Controller('cidades')
export class CidadesController {
  constructor(private readonly cidadesService: CidadesService) {}

  @Get()
  findAll() {
    return this.cidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cidadesService.findOne(id);
  }
  @Post()
  create(@Body() createCourseDto: CreateCidadeDto) {
    return this.cidadesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCidadeDto: UpdateCidadeDto) {
    return this.cidadesService.update(id, updateCidadeDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cidadesService.remove(id);
  }
}
