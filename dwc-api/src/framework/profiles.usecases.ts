import { IProfilesUseCases } from "dwc-core/dwc-core/use-cases/profiles.usecases.interface";
import { CreateProfileDto } from "../modules/profiles/models/dto/create-profile.dto";
import { IProfilesRepository } from "dwc-core/dwc-core/domain/repositories/profiles.repository.interface";
import { Profile } from "dwc-core/dwc-core/domain/models/profile.model";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class ProfilesUseCases implements IProfilesUseCases
 {
    constructor(@Inject('IProfilesRepository') private readonly profileRepository: IProfilesRepository) {}

    async findAllProfiles(): Promise<Profile[]> {
        return this.profileRepository.findAll();
    }    
    
    async createNewProfile(createProfileModel: CreateProfileDto): Promise<Profile> {
        return this.profileRepository.create(createProfileModel);
    }

    
}