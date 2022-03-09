import { Component, OnInit } from '@angular/core';
import { ApiconnectService } from 'src/app/core/apiconnect.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  zoo: any = [];

  constructor(private apiConnectService: ApiconnectService) { }

  ngOnInit(): void {
    this.apiConnectService
          .getInformation1()
          .subscribe(response => {
              this.zoo = response;
          });
  }

}
