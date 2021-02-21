import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appServicesService: AppService
  ) {}

  name = '';

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.name = params.name;
    });
  }
}
