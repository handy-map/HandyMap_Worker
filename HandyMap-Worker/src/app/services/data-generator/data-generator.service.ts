import { Injectable, OnInit } from '@angular/core';
import { IWorker } from 'src/app/models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService implements OnInit {
  categories: string[] = ['Electrician', 'Plumber', 'Tiler', 'Builder', 'Painter', 'Handyman'];
  ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  names: string[] = ['Jason', 'Matthew', 'Yannick', 'Laura', 'Uvir', 'Matt', 'Jim', 'Thabiso'];
  surnames: string[] = ['Jason', 'Matthew', 'Yannick', 'Laura', 'Uvir', 'Matt', 'Jim', 'Thabiso'];
  emails: string[] = ['Jason@blank.com', 'Matthew@blank.com', 'Yannick@blank.com', 'Laura@blank.com',
    'Uvir@blank.com', 'Matt@blank.com', 'Jim@blank.com', 'Thabiso@blank.com'];
  phoneNumbers: string[] = ['0829383838', '0829383838', '0829383838', '0829383838', '0829383838', '0829383838', '0829383838', '0829383838'];
  skills: string[][] = [['Electrician', 'Plumber'], ['Electrician', 'Plumber'], ['Electrician', 'Plumber'],
  ['Electrician', 'Plumber'], ['Electrician', 'Plumber'], ['Electrician', 'Plumber'],
  ['Electrician', 'Plumber'], ['Electrician', 'Plumber']]
  ratings: number[] = [3.4, 4.3, 4.8, 4.9, 5.0, 3.5, 3.5, 4.75];
  workers: IWorker[] = [];
  
  ngOnInit(): void {
     
  }


  constructor() {
    for (let i = 0; i < this.names.length; i++) {
      const id = this.ids[i];
      const name = this.names[i];
      const rating = this.ratings[i];
      const surname = this.surnames[i];
      const email = this.emails[i];
      const phoneNumber = this.phoneNumbers[i];
      const skills = this.skills[i];
      const category = this.categories[i];

      this.workers.push({
        id,
        name,
        surname,
        email,
        phoneNumber,
        skills,
        rating,
        category
      } as IWorker);
    }
  }
}
