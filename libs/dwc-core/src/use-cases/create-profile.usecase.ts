import { Profile } from "../domain/models/profile.model";
import { IProfilesRepository } from "../domain/repositories/profiles.repository.interface";
import { CreateProfileModel } from "../domain/models/create-profile.model";

export class CreateProfile
 {
    constructor(private readonly profilesRepository: IProfilesRepository) {}
    public async create(createProfileModel: CreateProfileModel): Promise<Profile> {
        return this.profilesRepository.create(createProfileModel);
      }
}