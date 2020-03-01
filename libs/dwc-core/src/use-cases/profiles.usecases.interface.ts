import { Profile } from "../domain/models/profile.model";
import { IProfilesRepository } from "../domain/repositories/profiles.repository.interface";
import { CreateProfileModel } from "../domain/models/create-profile.model";

export interface IProfilesUseCases
 {
    findAllProfiles(): Promise<Profile[]>
    createNewProfile(createProfileModel: CreateProfileModel): Promise<Profile>
}