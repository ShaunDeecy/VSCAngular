import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndProject';
//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//   this.http.get('https://localhost:7246/api/LicensePlate').subscribe(data => {
//     console.log(data);
//   });
// }

}
