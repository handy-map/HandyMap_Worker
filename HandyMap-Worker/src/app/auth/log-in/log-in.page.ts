import { Component, OnInit, Input } from '@angular/core';
import { LoginDetails } from 'src/app/models/login-details.model';
import { NgForm } from '@angular/forms';
import { IWorker } from 'src/app/models/worker.model';
import { DataGeneratorService } from 'src/app/services/data-generator/data-generator.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})

export class LogInPage implements OnInit {
  email: string;
  password: string;
  private state = true;
  skills: string[];

  @Input() worker: IWorker;
  constructor(private dataGenerator: DataGeneratorService) { }

  ngOnInit() {
    document.getElementById('signin').style.visibility = 'hidden';
  }

  getCategories(): string[] {
    return this.dataGenerator.categories;
  }

  catSelected(values) {
    console.log(values.detail.value);
  }

  onSubmit(fields: NgForm): void {
    console.log('Submitted');

    if (!fields.valid) {
      alert('Invalid input fields provided');
      return;
    }

    const worker = new IWorker();
    worker.name = fields.value.name;
    worker.surname = fields.value.surname;
    worker.email = fields.value.email;
    worker.password = fields.value.password;
    worker.skills = this.skills;
    worker.phoneNumber = fields.value.phone;

    const jsonObject = JSON.stringify(worker);
    console.log('Sending Request body: ' + jsonObject);
  }

  login(fields: NgForm) {
    var details = new LoginDetails(fields.value.email, fields.value.password);
    const jsonObject = JSON.stringify(details);
    console.log(jsonObject);
  }

}
