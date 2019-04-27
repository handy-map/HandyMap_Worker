import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Worker } from '../worker.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  workers: Worker[];

  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.workers = this.profileService.workers;
    console.log(this.workers);
  }
}
