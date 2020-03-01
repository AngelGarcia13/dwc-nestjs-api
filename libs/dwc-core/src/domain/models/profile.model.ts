import { BaseModel } from "./base.model";

export class Profile extends BaseModel{
    readonly _id: string;
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