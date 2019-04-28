import { Injectable, Input, OnInit } from '@angular/core';
import { IWorker } from '../../models/worker.model';
import { Observable, of } from 'rxjs';
import { DataGeneratorService } from '../data-generator/data-generator.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerProfileService {
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

  getWorker(workerId: number): Observable<IWorker> {
    let tmp = this.workers.find(work => work.id === workerId);
    console.log(tmp);
    return of(tmp);
  }
}
