import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Cidade } from './entities/cidade.entity';
import { Uf } from './entities/uf.entity';

@Injectable()
export class CidadesService {
  constructor(
    @Inject('CIDADE_REPOSITORY')
    private cidadeRepository: Repository<Cidade>,

    @Inject('UF_REPOSITORY')
    private ufRepository: Repository<Uf>,
  ) {}

  findAll() {
    return this.cidadeRepository.find({
      relations: ['ufs'],
    });
  }

  findOne(id: string) {
    const cidade = this.cidadeRepository.findOne({
      where: { id: Number(id) },
      relations: ['ufs'],
    });
    if (!cidade) {
      throw new NotFoundException(`Cidade ${id} not found`);
    }
    return cidade;
  }

  async create(createCidadeDto: CreateCidadeDto) {
    const ufs = await Promise.all(
      createCidadeDto.ufs.map((name) => this.preloadUfByName(name)),
    );
    console.log(ufs);

    const cidade = this.cidadeRepository.create({
      ...createCidadeDto,
      ufs,
    });
    return this.cidadeRepository.save(cidade);
  }

  async update(id: string, updateCidadeDto: UpdateCidadeDto) {
    const ufs =
      updateCidadeDto.ufs &&
      (await Promise.all(
        updateCidadeDto.ufs.map((name) => this.preloadUfByName(name)),
      ));

    const cidade = await this.cidadeRepository.preload({
      id: +id,
      ...updateCidadeDto,
      ufs,
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
  private async preloadUfByName(name: string): Promise<Uf> {
    const uf = await this.ufRepository.findOne({ where: { name } });
    if (uf) {
      return uf;
    }
    return this.ufRepository.create({ name });
  }
}
