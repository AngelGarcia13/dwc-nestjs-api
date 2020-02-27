import { Controller, Post, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './models/dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {
    constructor(private profilesService: ProfilesService) { }
    // add a profile
    @Post()
    async addProfile(@Res() res, @Body() createProfileDTO: CreateProfileDto) {
        const customer = await this.profilesService.create(createProfileDTO);
        return res.status(HttpStatus.OK).json({
            message: "Profile has been created successfully",
            customer
        })
    }

    // Retrieve profiles list
    @Get()
    async getAllCustomer(@Res() res) {
        const profiles = await this.profilesService.findAll();
        return res.status(HttpStatus.OK).json(profiles);
    }
}
