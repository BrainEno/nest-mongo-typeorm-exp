import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from '../users/user.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: MongoRepository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto, owner: User) {
    const cat = new Cat();
    cat.description = createCatDto.description;
    cat.name = createCatDto.name;
    cat.owner = owner;

    return this.catRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
