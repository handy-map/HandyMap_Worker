import { Injectable } from '@angular/core';
import { Worker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  workers: Worker[] =[
    {
      id: 1,
      imageUrl: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2019/04/GettyImages-1144791678.jpg',
      name: 'Jurgen Klopp',
      email: 'jklopp@lfc.com',
      rating: 5
    },
    {
      id: 2,
      imageUrl: 'https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg',
      name: 'Jon Snow',
      email: 'jsnow@got.com',
      rating: 4.7
    }
  ];


  constructor() {}
}
