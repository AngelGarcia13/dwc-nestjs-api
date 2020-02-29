import { Controller, Post, Body, Res, HttpStatus, Get, Inject } from '@nestjs/common';
import { CreateProfileDto } from './models/dto/create-profile.dto';
import { Profile } from './models/profile.entity';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { IProfilesService } from './interfaces/profiles.service';

@ApiTags('profiles')
@Controller('profiles')
export class ProfilesController {
    constructor(@Inject('IProfilesService') private readonly profilesService: IProfilesService) { }
    // add a profile
    @Post()
    @ApiCreatedResponse({
        description: 'Profile has been created successfully.',
        type: Profile,
      })
    async addProfile(@Res() res, @Body() createProfileDTO: CreateProfileDto) {
        const profile = await this.profilesService.create(createProfileDTO);
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
    async getAllCustomer(@Res() res) {
        const profiles = await this.profilesService.findAll();
        return res.status(HttpStatus.OK).json(profiles);
    }
}
