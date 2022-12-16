import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateCidadeDto,
  UpdateCidadeDto,
} from './dto/create-cidade.dto/create-cidade.dto';
import { Cidade } from './entities/cidade.entity/cidade.entity';
import { Uf } from './entities/uf.entity/uf.entity';

@Injectable()
export class CidadesService {
  constructor(
    @InjectRepository(Cidade)
    private readonly cidadeRepository: Repository<Cidade>,
    //*************************************************************************************/
    @InjectRepository(Uf)
    private readonly ufRepository: Repository<Uf>,
  ) {}
  //************************************************************************************************* */
  findAll() {
    return this.cidadeRepository.find();
  }
  //************************************************************************************************ */
  findOne(id: string) {
    const cidade = this.cidadeRepository.findOne({ where: { id: Number(id) } });
    if (!cidade) {
      throw new NotFoundException(`Cidade ${id} not found`);
    }
    return cidade;
  }
  //**************************************Relação******************************************************** */
  async create(createCidadeDto: CreateCidadeDto) {
    const uf = await this.preloadUfByName(createCidadeDto.uf);
    //----------------------------------------------------------------------
    const cidade = this.cidadeRepository.create({
      ...createCidadeDto,
      uf,
    });
    return this.cidadeRepository.save(cidade);
  }

  //**********************************Relação************************************************************** */
  async update(id: number, dto: CreateCidadeDto) {
    const uf = this.preloadUfByName(id);
    if (uf) {
      const updatedto = new UpdateCidadeDto(dto.nome_cidade, uf);
      const cidade = await this.cidadeRepository.preload({
        id: +id,
        ...updatedto,
      });
      if (!cidade) {
        throw new NotFoundException(`Cidade ${id} not found`);
      }
      return this.cidadeRepository.save(cidade);
    } else {
      throw new NotFoundException(`Estado ${id} not found`);
    }
  }

  //********************************************************************************************* */
  async remove(id: string) {
    const cidade = await this.cidadeRepository.findOne({
      where: { id: Number(id) },
    });
    if (!cidade) {
      throw new NotFoundException(`Cidade ${id} not found`);
    }
    return this.cidadeRepository.remove(cidade);
  }

  //****************************relaçãp****************************************************** */
  private async preloadUfByName(idestado: number): Promise<Uf> {
    const uf = await this.ufRepository.findOne({ where: { id: idestado } });
    if (uf) {
      return uf;
    }
  }
}
