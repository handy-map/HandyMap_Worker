import { Component } from '@angular/core';
import { DataGeneratorService } from '../services/data-generator/data-generator.service';
import { Job } from '../models/job.model';
import {Common} from "../services/data-generator/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private dataGenerator: DataGeneratorService) {
  }

  getJobs() {
    return this.dataGenerator.jobs;
  }

  accept(jobId) {
    // Make service call to accept a job
    console.log('Accepted' + jobId.jobName);

    DataGeneratorService.myjobs.fill(jobId);
    this.dataGenerator.jobs.splice(this.dataGenerator.jobs.indexOf(jobId), 1);
  }

  reschedule(jobId: number) {

  }

  decline(jobId) {
    console.log('Declined');
    this.dataGenerator.jobs.splice(this.dataGenerator.jobs.indexOf(jobId), 1);
  }
}
