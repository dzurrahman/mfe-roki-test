import { Component, OnInit, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  version = VERSION.full
  title!: string

  test: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute?.params?.subscribe( (res: any) => {
      this.title = res.data ?? 'I am Remote Apps'
    })

    this.test = await Device.getInfo();

    
  }

}
