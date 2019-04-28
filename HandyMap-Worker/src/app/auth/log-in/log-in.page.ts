import { Component, OnInit, Input } from '@angular/core';
import { LoginDetails } from 'src/app/models/login-details.model';
import { NgForm } from '@angular/forms';
import { IWorker } from 'src/app/models/worker.model';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})

export class LogInPage implements OnInit {
  email: string;
  password: string;
  skills: string[];
  isLoading = false;

  @Input() worker: IWorker;
  constructor(private router: Router, private loadinCtrol: LoadingController) { }

  ngOnInit() {
    document.getElementById('signin').style.visibility = 'hidden';
  }

  onSubmit(fields: NgForm) {
    var details = new LoginDetails(fields.value.email, fields.value.password);
    const jsonObject = JSON.stringify(details);
    console.log(jsonObject);
  }

  onLogin() {
    console.log('OnSignUp');
    this.isLoading = true;
    this.loadinCtrol
      .create({ keyboardClose: true, message: "Logging in..." })
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
