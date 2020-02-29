import { Profile } from "../models/profile.entity";
import { CreateProfileDto } from "../models/dto/create-profile.dto";

export interface IProfilesService{
    create(createProfileDto: CreateProfileDto): Promise<Profile>
    findAll(): Promise<Profile[]>
}