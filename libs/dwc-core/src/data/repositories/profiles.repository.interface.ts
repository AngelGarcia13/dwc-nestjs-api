import { CreateProfileModel } from "../../domain/models/create-profile.model";
import { Profile } from "../../domain/models/profile.model";

export interface IProfilesRepository{
    create(createProfileModel: CreateProfileModel): Promise<Profile>
    findAll(): Promise<Profile[]>
}