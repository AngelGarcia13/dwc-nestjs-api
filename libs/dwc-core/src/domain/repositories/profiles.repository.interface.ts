import { CreateProfileModel } from "../models/create-profile.model";
import { Profile } from "../models/profile.model";

export interface IProfilesRepository{
    create(createProfileModel: CreateProfileModel): Promise<Profile>
    findAll(): Promise<Profile[]>
}