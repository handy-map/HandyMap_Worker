import { Component } from '@angular/core';
import { DataGeneratorService } from '../services/data-generator/data-generator.service';
import { Job } from '../models/job.model';

import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(
    private dataGenerator: DataGeneratorService,
    private alertController: AlertController
  ) {}

  getJobs() {
    return this.dataGenerator.jobs;
  }

  async presentAlert(status) {
    const alert = await this.alertController.create({
      header: 'Status',
      message: 'The booking has been ' + status,
      buttons: [
        {
          text: 'Okay'
        }
      ]
    });

    await alert.present();
  }

  accept(job) {
    // Make service call to accept a job
    console.log('Accepted' + job.jobName);

    DataGeneratorService.myjobs.push(job);
    this.presentAlert('Accepted');
    this.dataGenerator.jobs.splice(this.dataGenerator.jobs.indexOf(job), 1);
  }

  reschedule(jobId: number) {}

  decline(jobId) {
    console.log('Declined');
    this.presentAlert('Declined');
    this.dataGenerator.jobs.splice(this.dataGenerator.jobs.indexOf(jobId), 1);
  }
}
