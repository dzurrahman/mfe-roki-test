import { Component, OnInit, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  version = VERSION.full
  title!: string

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute?.params?.subscribe( (res: any) => {
      this.title = res.data ?? 'I am Remote Apps'
    })
  }

}
