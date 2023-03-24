import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { LicenseplateService } from 'src/app/services/licenseplate.service';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css']
})
export class LicenseListComponent implements OnInit{
  licenseplates: any[] = [];

  constructor(private plateService: LicenseplateService) { }

  ngOnInit() {
    this.getPlates();
   }

   getPlates(): void {
    this.plateService.getPlates()
    .subscribe(plates => this.licenseplates = plates);
  }
}
