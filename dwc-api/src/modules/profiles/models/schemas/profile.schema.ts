import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
    name: String,
    initials: String,
    image: String,
    summary: String,
    skills: String,
    linkedin: String,
    github: String,
    twitter: String,
    webpage: String,
    stackoverflow: String,
    telegram: String,
    youtube: String
});