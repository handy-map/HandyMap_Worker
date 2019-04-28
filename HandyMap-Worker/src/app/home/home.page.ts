import { Component } from '@angular/core';
import { DataGeneratorService } from '../services/data-generator/data-generator.service';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage{

  constructor(private dataGenerator: DataGeneratorService) {
  }

  getJobs() {
    return this.dataGenerator.jobs;
  }

  accept(job: Job) {

  }

  reschedule(job: Job) {

  }

  decline(job: Job) {

  }
}
