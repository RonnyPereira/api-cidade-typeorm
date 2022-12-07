import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCidadeDto } from './dto/create-cidade.dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto/update-cidade.dto';
import { Cidade } from './entities/cidade.entity/cidade.entity';

@Injectable()
export class CidadesService {
  constructor(
    @InjectRepository(Cidade)
    private readonly cidadeRepository: Repository<Cidade>,
  ) {}

  findAll() {
    return this.cidadeRepository.find();
  }

  findOne(id: string) {
    const cidade = this.cidadeRepository.findOne({ where: { id: Number(id) } });
    if (!cidade) {
      throw new NotFoundException(`Cidade ${id} not found`);
    }
    return cidade;
  }

  create(createCidadeDto: CreateCidadeDto) {
    const cidade = this.cidadeRepository.create(createCidadeDto);
    return this.cidadeRepository.save(cidade);
  }

  async update(id: string, updateCidadeDto: UpdateCidadeDto) {
    const cidade = await this.cidadeRepository.preload({
      id: +id,
      ...updateCidadeDto,
    });
    if (!cidade) {
      throw new NotFoundException(`Cidade ${id} not found`);
    }
    return this.cidadeRepository.save(cidade);
  }

  async remove(id: string) {
    const cidade = await this.cidadeRepository.findOne({
      where: { id: Number(id) },
    });
    if (!cidade) {
      throw new NotFoundException(`Cidade ${id} not found`);
    }
    return this.cidadeRepository.remove(cidade);
  }
}
