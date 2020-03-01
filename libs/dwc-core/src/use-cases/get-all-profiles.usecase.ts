import { Profile } from "../domain/models/profile.model";
import { IProfilesRepository } from "../domain/repositories/profiles.repository.interface";

export class GetAllProfiles
 {
    constructor(private readonly profilesRepository: IProfilesRepository) {}
    public async findAll(): Promise<Profile[]>{
        return this.profilesRepository.findAll();
    }
}