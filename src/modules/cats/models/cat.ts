export class Cat {
    id?: number;
    name: string;
    age: number;
    breed: string;
    constructor(name: string, age: number, breed: string, id?: number) { 
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.id = id;
    }
}