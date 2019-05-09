import { Component } from '@angular/core';
import {DataGeneratorService} from '../services/data-generator/data-generator.service';

@Component({
  selector: 'app-planner',
  templateUrl: 'planner.page.html',
  styleUrls: ['planner.page.scss']
})

export class PlannerPage {
  constructor(private dataGenerator: DataGeneratorService) {}
  getMyJobs() {
    return DataGeneratorService.myjobs;
  }
}
