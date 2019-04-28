import { Component, OnInit, Input } from '@angular/core';
import { DataGeneratorService } from 'src/app/services/data-generator/data-generator.service';
import { NgForm } from '@angular/forms';
import { IWorker } from 'src/app/models/worker.model';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular'; 

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  password: string;
  skills: string[];
  isLoading = false;

  @Input() worker: IWorker;
  constructor(private dataGenerator: DataGeneratorService, private router: Router, private loadinCtrol: LoadingController) { }

  ngOnInit() {
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

  onSignUp() {
    console.log('OnSignUp');
    this.isLoading = true;
    this.loadinCtrol
    .create({ keyboardClose: true, message: "Signing up..."})
    .then(load => {
      load.present();
      setTimeout(() => {
        this.isLoading = false;
        load.dismiss();
        this.router.navigateByUrl('/tabs/home');
      }, 1500);
    });
  }
}
