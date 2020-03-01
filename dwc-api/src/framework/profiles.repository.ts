import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from '../modules/profiles/models/profile.entity';
import { IProfilesRepository } from 'dwc-core/dwc-core/domain/repositories/profiles.repository.interface';
import { CreateProfileDto } from '../modules/profiles/models/dto/create-profile.dto';

@Injectable()
export class ProfilesRepository implements IProfilesRepository {
  constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) { }

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const createdCat = new this.profileModel(createProfileDto);
    return createdCat.save();
  }

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().exec();
  }
}
