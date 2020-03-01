import { Controller, Post, Body, Res, HttpStatus, Get, Inject } from '@nestjs/common';
import { Profile } from './models/profile.entity';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateProfileDto } from './models/dto/create-profile.dto';
import { IProfilesUseCases } from 'dwc-core/dwc-core/use-cases/profiles.usecases.interface';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
    constructor(@Inject('IProfilesUseCases') private readonly profilesUseCases: IProfilesUseCases) { }
    // add a profile
    @Post()
    @ApiCreatedResponse({
        description: 'Profile has been created successfully.',
        type: Profile,
      })
    async addProfile(@Res() res, @Body() createProfileDTO: CreateProfileDto) {
        const profile = await this.profilesUseCases.createNewProfile(createProfileDTO);
        return res.status(HttpStatus.OK).json({
            message: "Profile has been created successfully",
            profile
        })
    }

    // Retrieve profiles list
    @Get()
    @ApiOkResponse({
        description: 'Get all profiles.',
        type: [Profile],
      })
    async getAll(@Res() res) {
        const profiles = await this.profilesUseCases.findAllProfiles();
        return res.status(HttpStatus.OK).json(profiles);
    }
}
