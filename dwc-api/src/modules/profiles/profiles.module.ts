import { Module } from '@nestjs/common';
import { ProfilesRepository } from '../../framework/profiles.repository';
import { ProfilesController } from './profiles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema } from './models/schemas/profile.schema';
import { ProfilesUseCases } from 'dwc-api/src/framework/profiles.usecases';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }])],
  providers: [
    {
      provide: 'IProfilesRepository',
      useClass: ProfilesRepository
    },
    {
      provide: 'IProfilesUseCases',
      useClass: ProfilesUseCases
    }
  ],
  controllers: [ProfilesController]
})
export class ProfilesModule {}
