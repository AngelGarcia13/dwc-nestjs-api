import { Injectable } from '@nestjs/common';
import { Cat } from './models/cat';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [new Cat("Angel", 26, "Test", 1), new Cat("Rene", 28, "Test", 3), new Cat("Garcia", 26, "Test", 2)];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  find(id: number){
    return this.cats.find(x => x.id == id);
  }
  
  remove(id: number){
    let index = this.cats.findIndex(x => x.id === id); //find index in your array
    return this.cats.splice(index, 1);//remove element from array
  }
}
