export class UpdateCatDto {
    id: number;
    name: string;
    age: number;
    breed: string;
    constructor(id: number, name: string, age: number, breed: string) { 
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
  }