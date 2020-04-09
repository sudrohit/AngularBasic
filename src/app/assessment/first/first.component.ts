import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import { bookDetails } from 'src/app/shared/modal/bookDetails';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  // Member variable to hold data object.
  serviceData : bookDetails[] = [];

  constructor(private dataservice : DataServiceService) { }

  ngOnInit() {
    // refresh post data every 10 seconds.
    setInterval(() => this.getServiceData(), 10000);
    this.getServiceData();
  }

  getServiceData() {
    this.serviceData = [];

    this.dataservice.getInfoByDate().subscribe(
      (data: bookDetails[]) => {
        
      }
    )
  }

}
