import { Document } from 'mongoose';

export interface Profile extends Document{
    readonly name: string;
    readonly initials: string;
    readonly image: string;
    readonly summary: string;
    readonly skills: string;
    readonly linkedin: string;
    readonly github: string;
    readonly twitter: string;
    readonly webpage: string;
    readonly stackoverflow: string;
    readonly telegram: string;
    readonly youtube: string;
}