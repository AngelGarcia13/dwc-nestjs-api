import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './models/profile.entity';
import { CreateProfileDto } from './models/dto/create-profile.dto';
import { IProfilesService } from './interfaces/profiles.service';

@Injectable()
export class ProfilesService implements IProfilesService{
    constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>) {}

  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const createdCat = new this.profileModel(createProfileDto);
    return createdCat.save();
  }

  async findAll(): Promise<Profile[]> {
    return this.profileModel.find().exec();
  }
}
